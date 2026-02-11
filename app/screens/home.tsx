import type { NavigationPropsType } from "@/types/navigation";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useLayoutEffect } from "react";
import { Pressable, Text, View } from "react-native";

export default function HomeScreen({ navigation }: NavigationPropsType) {
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
      <Text style={{ fontSize: 40, marginTop: 40 }}>Homescreen</Text>

      <Pressable onPress={() => navigation.toggleDrawer()}>
        <Text>Toggle drawer</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("Dettagli")}>
        <Text>{"Vai alla pagina Dettaglio ===>"}</Text>
      </Pressable>
    </View>
  );
}
