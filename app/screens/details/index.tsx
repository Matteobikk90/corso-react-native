import type { NavigationPropsType } from "@/types/navigation";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useLayoutEffect } from "react";
import { Pressable, Text, View } from "react-native";

export default function DetailMain({ navigation }: NavigationPropsType) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          style={(pressed) => ({
            marginLeft: 15,
            opacity: pressed ? 0.5 : 1,
          })}
          onPress={() => navigation.toggleDrawer()}>
          <Ionicons name="menu" size={28} color="red" />
        </Pressable>
      ),
    });
  });

  return (
    <View>
      <Text style={{ fontSize: 40 }}>Dettagli - Main</Text>

      <Pressable onPress={() => navigation.navigate("DettagliSecond")}>
        <Text>{"Vai alla pagina dettaglio second ===>"}</Text>
      </Pressable>
    </View>
  );
}
