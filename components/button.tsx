import type { ButtonHomeType } from "@/types/button";
import { Pressable, Text } from "react-native";

export function ButtonHome({ text }: ButtonHomeType) {
  const onClickButton = () => {
    alert("Button pressed!");
  };

  return (
    <Pressable
      style={({ pressed }) => {
        return {
          margin: 20,
          padding: 10,
          backgroundColor: pressed ? "darkred" : "red",
          borderRadius: 5,
        };
      }}
      onPress={onClickButton}>
      {({ pressed }) => (
        <Text style={{ color: "white" }}>
          {pressed ? "Sto premendo…" : "Premi qui"}
        </Text>
      )}
    </Pressable>
  );
}
