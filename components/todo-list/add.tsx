import { useTodoContext } from "@/contexts";
import { Pressable, Text } from "react-native";

export function AddTodo() {
  const { addTodo, inputText, setInputText } = useTodoContext();

  const handleAddTodo = () => {
    const trimmedText = inputText.trim();
    if (!trimmedText) return;

    addTodo(trimmedText);
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
