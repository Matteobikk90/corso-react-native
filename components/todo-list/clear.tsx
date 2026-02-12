import { useTodoContext } from "@/contexts";
import { Pressable, Text } from "react-native";

export function ClearTodos() {
  const { clearTodos } = useTodoContext();

  return (
    <Pressable
      onPress={clearTodos}
      style={{
        marginTop: 20,
        backgroundColor: "yellow",
        padding: 10,
        borderRadius: 10,
        width: 100,
        margin: "auto",
      }}>
      <Text>Pulisci</Text>
    </Pressable>
  );
}
