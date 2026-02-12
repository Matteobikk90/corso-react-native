import { useAppDispatch } from "@/storeR/hooks";
import { clearTodos } from "@/storeR/slices/todos";
import { Pressable, Text } from "react-native";

export function ClearTodos() {
  const dispatch = useAppDispatch();

  return (
    <Pressable
      onPress={() => dispatch(clearTodos())}
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
