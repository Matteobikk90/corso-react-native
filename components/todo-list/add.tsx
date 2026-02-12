import { useAppDispatch, useAppSelector } from "@/storeR/hooks";
import { addTodo, setInputText } from "@/storeR/slices/todos";
import { Pressable, Text } from "react-native";

export function AddTodo() {
  const dispatch = useAppDispatch();
  const { inputText } = useAppSelector((state) => state.todoSliceReducer);

  const handleAddTodo = () => {
    const trimmedText = inputText.trim();
    if (!trimmedText) return;

    dispatch(addTodo({ title: trimmedText }));
    dispatch(setInputText(""));
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
