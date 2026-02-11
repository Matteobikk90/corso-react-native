import { Link, router } from "expo-router";
import { useCallback, useState } from "react";
import {
  FlatList,
  Pressable,
  Text,
  TextInput,
  type ListRenderItem,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TodoRow } from "./TodoRow";

export type ToDoType = { id: string; title: string; done: boolean };

export function ToDo() {
  const [todos, setTodos] = useState<ToDoType[]>([
    {
      id: "1",
      title: "Cammina 10 min",
      done: false,
    },
  ]);
  const [inputText, setInputText] = useState("");

  const addTodo = () => {
    const title = inputText.trim();
    if (!title) return;

    setTodos((prev) => [
      ...prev,
      { id: String(Date.now()), title, done: false },
    ]);

    setInputText("");
  };

  const toggleTodo = useCallback((id: string) => {
    return setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }, []);

  const deleteItem = useCallback((id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const renderItem = ({ item }: ListRenderItem<ToDoType>) => (
    <TodoRow todo={item} onToggle={toggleTodo} onDelete={deleteItem} />
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

      <Pressable onPress={addTodo}>
        <Text
          style={{
            margin: "auto",
            padding: 20,
            backgroundColor: "blue",
            width: "auto",
            color: "white",
            borderRadius: 20,
          }}>
          AGGIUNGI TODO
        </Text>
      </Pressable>

      <Pressable
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
      </Link>
    </SafeAreaView>
  );
}
