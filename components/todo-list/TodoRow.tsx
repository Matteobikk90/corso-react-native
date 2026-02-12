import type { ToDoType } from "@/reducers/types";
import { memo } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export function TodoRow({
  todo,
  onToggle,
  onDelete,
}: {
  todo: ToDoType;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <View style={styles.taskContainer}>
      <Pressable onPress={() => onToggle(todo.id)}>
        <Text style={todo.done && styles.todo}>{todo.title}</Text>
      </Pressable>

      <Pressable onPress={() => onDelete(todo.id)}>
        <Text
          style={{
            margin: "auto",
            padding: 5,
            backgroundColor: "red",
            width: "auto",
            color: "black",
            borderRadius: 20,
          }}>
          RIMUOVI TODO - {todo.title}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 40,
    marginBottom: 40,
  },
  todo: {
    textDecorationLine: "line-through",
    opacity: 0.5,
  },
});

export default memo(TodoRow);
