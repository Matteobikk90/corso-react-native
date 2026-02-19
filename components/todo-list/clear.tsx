import { useStore } from "@/storeZ";
import { Alert, Pressable, Text } from "react-native";
import { useShallow } from "zustand/react/shallow";

export function ClearTodos() {
  const { clearTodos, clearCache } = useStore(
    useShallow(({ clearTodos, clearCache }) => ({
      clearTodos,
      clearCache,
    }))
  );

  const handleClear = () => {
    Alert.alert("Conferma", "Pulire tutti i todos? ", [
      {
        text: "Annulla",
        style: "cancel",
      },
      {
        text: "Pulisci",
        style: "destructive",
        onPress: () => {
          clearTodos();
          clearCache();
        },
      },
    ]);
  };

  return (
    <Pressable
      onPress={handleClear}
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
