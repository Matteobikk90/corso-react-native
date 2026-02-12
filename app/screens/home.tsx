import { ToDo } from "@/components/todo-list";
import { ToDoProvider } from "@/contexts";
import type { DrawerParamList } from "@/types/navigation";
import Ionicons from "@expo/vector-icons/Ionicons";
import type { DrawerScreenProps } from "@react-navigation/drawer";
import { useLayoutEffect } from "react";
import { Pressable, Text, View } from "react-native";

export default function HomeScreen({
  navigation,
}: DrawerScreenProps<DrawerParamList, "Home">) {
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
    <ToDoProvider>
      <View>
        <Text style={{ fontSize: 40, marginTop: 40 }}>Homescreen</Text>

        {/* <Pressable onPress={() => navigation.toggleDrawer()}>
        <Text>Toggle drawer</Text>
      </Pressable>

      <Pressable
        onPress={() =>
          navigation.navigate("Dettagli", { screen: "DettagliMain" })
        }>
        <Text>{"Vai alla pagina Dettaglio ===>"}</Text>
      </Pressable> */}

        <ToDo />
      </View>
    </ToDoProvider>
  );
}
