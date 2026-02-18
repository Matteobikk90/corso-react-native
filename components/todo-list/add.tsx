import { useStore } from "@/storeZ";
import { Pressable, Text } from "react-native";

export function AddTodo() {
  const inputText = useStore((state) => state.inputText);
  const addTodo = useStore((state) => state.addTodo);
  const setInputText = useStore((state) => state.setInputText);

  const handleAddTodo = () => {
    const trimmedText = inputText.trim();
    if (!trimmedText) return;

    addTodo({ title: trimmedText });
    setInputText("");
  };

  return (
    <Pressable onPress={handleAddTodo}>
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
  );
}
