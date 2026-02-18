import type { ToDoType } from "@/reducers/types";
import { useTodoStore } from "@/storeZ";
import { useEffect } from "react";
import { ActivityIndicator, FlatList, TextInput } from "react-native";
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
    loading,
    todos,
    inputText,
  } = useTodoStore(
    useShallow(
      ({
        getTodos,
        toggleTodo,
        deleteTodo,
        setInputText,
        loading,
        todos,
        inputText,
      }) => ({
        getTodos,
        toggleTodo,
        deleteTodo,
        setInputText,
        loading,
        todos,
        inputText,
      })
    )
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
