import { getTodos } from "@/queries/todos";
import type { ToDoType } from "@/reducers/types";
import { useAppDispatch, useAppSelector } from "@/storeR/hooks";
import { deleteTodo, setInputText, toggleTodo } from "@/storeR/slices/todos";
import { useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  TextInput,
  type ListRenderItem,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TodoRow } from "./TodoRow";
import { AddTodo } from "./add";
import { ClearTodos } from "./clear";

export function ToDo() {
  const dispatch = useAppDispatch();
  const { todos, inputText, loading } = useAppSelector(
    (state) => state.todoSliceReducer
  );

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const handleToggle = (id: string) => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const renderItem = ({ item }: ListRenderItem<ToDoType>) => (
    <TodoRow todo={item} onToggle={handleToggle} onDelete={handleDelete} />
  );

  return (
    <SafeAreaView>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}

      <FlatList
        data={todos}
        keyExtractor={({ id }: ToDoType) => id}
        renderItem={renderItem}
      />
      {/* <FlatList /> */}

      <TextInput
        value={inputText}
        onChangeText={(text) => dispatch(setInputText(text))}
        placeholder="Scrivi un task…"
        style={{ borderWidth: 1, padding: 10, borderRadius: 10 }}
      />

      <AddTodo />

      <ClearTodos />

      {/* <Pressable
        onPress={() => router.push("/modal")}
        style={{
          marginVertical: 40,
          backgroundColor: "green",
          padding: 10,
          borderRadius: 10,
        }}>
        <Text>Open modal</Text>
      </Pressable>

      <Link
        href={"/modal"}
        style={{ backgroundColor: "yellow", padding: 10, borderRadius: 10 }}>
        <Text>Open modal</Text>
      </Link> */}
    </SafeAreaView>
  );
}
