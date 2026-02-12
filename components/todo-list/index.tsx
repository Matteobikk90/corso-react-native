import { useTodoContext } from "@/contexts";
import type { ToDoType } from "@/reducers/types";
import { FlatList, TextInput, type ListRenderItem } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TodoRow } from "./TodoRow";
import { AddTodo } from "./add";
import { ClearTodos } from "./clear";

export function ToDo() {
  const { todos, toggleTodo, deleteTodo, inputText, setInputText } =
    useTodoContext();

  const renderItem = ({ item }: ListRenderItem<ToDoType>) => (
    <TodoRow todo={item} onToggle={toggleTodo} onDelete={deleteTodo} />
  );

  return (
    <SafeAreaView>
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
