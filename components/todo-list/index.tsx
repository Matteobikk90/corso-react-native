import type { ToDoType } from "@/reducers/types";
import { useStore } from "@/storeZ";
import { useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useShallow } from "zustand/react/shallow";
import { TodoRow } from "./TodoRow";
import { AddTodo } from "./add";
import { ClearTodos } from "./clear";

export function ToDo() {
  const {
    getTodos,
    toggleTodo,
    deleteTodo,
    setInputText,
    error,
    loading,
    todos,
    inputText,
  } = useStore(
    useShallow((state) => ({
      getTodos: state.getTodos,
      toggleTodo: state.toggleTodo,
      deleteTodo: state.deleteTodo,
      setInputText: state.setInputText,
      loading: state.loading,
      todos: state.todos,
      inputText: state.inputText,
      error: state.error,
    }))
  );

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  const handleToggle = (id: string) => {
    toggleTodo(id);
  };

  const handleDelete = (id: string) => {
    deleteTodo(id);
  };

  const renderItem = ({ item }: { item: ToDoType }) => (
    <TodoRow todo={item} onToggle={handleToggle} onDelete={handleDelete} />
  );

  return (
    <SafeAreaView>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}

      {error && (
        <View>
          <Text>{error}</Text>
        </View>
      )}

      <FlatList
        data={todos}
        keyExtractor={({ id }: ToDoType) => id}
        renderItem={renderItem}
      />
      {/* <FlatList /> */}

      <TextInput
        value={inputText}
        onChangeText={(text) => setInputText(text)}
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
