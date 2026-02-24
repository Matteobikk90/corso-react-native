import type { ToDoType } from "@/reducers/types";
import Ionicons from "@expo/vector-icons/Ionicons";
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
    <View style={styles.container}>
      <Pressable
        onPress={() => onToggle(todo.id)}
        style={({ pressed }) => [
          styles.titleContainer,
          pressed && styles.pressed,
        ]}>
        <Text style={[styles.title, todo.done && styles.done]}>
          {todo.title}
        </Text>
      </Pressable>

      <Pressable
        onPress={() => onDelete(todo.id)}
        style={({ pressed }) => [
          styles.deleteButton,
          pressed && styles.pressed,
        ]}>
        <Ionicons name="trash" size={18} color="#DC2626" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },

  titleContainer: {
    flex: 1,
  },

  title: {
    fontSize: 16,
    color: "#0F172A",
  },

  done: {
    textDecorationLine: "line-through",
    opacity: 0.5,
  },

  deleteButton: {
    padding: 8,
    borderRadius: 50,
    backgroundColor: "#FEE2E2",
  },

  pressed: {
    opacity: 0.6,
    transform: [{ scale: 0.95 }],
  },
});

export default memo(TodoRow);
