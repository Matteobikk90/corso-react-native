import { ToDo } from "@/components/todo-list";
import type { DrawerParamList } from "@/types/navigation";
import Ionicons from "@expo/vector-icons/Ionicons";
import type { DrawerScreenProps } from "@react-navigation/drawer";
import { useLayoutEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({
  navigation,
}: DrawerScreenProps<DrawerParamList, "Home">) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.toggleDrawer()}
          style={({ pressed }) => [
            styles.menuButton,
            pressed && styles.pressed,
          ]}>
          <Ionicons name="menu" size={26} color="#6C47FF" />
        </Pressable>
      ),
      headerTitleAlign: "center",
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Home</Text>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            styles.primary,
            pressed && styles.pressed,
          ]}
          onPress={() => navigation.toggleDrawer()}>
          <Text style={styles.buttonText}>Toggle Drawer</Text>
        </Pressable>

        {/* <Pressable
          style={({ pressed }) => [
            styles.button,
            styles.secondary,
            pressed && styles.pressed,
          ]}
          onPress={() =>
            navigation.navigate("Dettagli", {
              screen: "DettagliMain",
            })
          }>
          <Text style={styles.buttonText}>Vai alla pagina Dettaglio</Text>
        </Pressable> */}

        <View style={styles.todoContainer}>
          <ToDo />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  inner: {
    padding: 20,
    gap: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#0F172A",
  },

  menuButton: {
    marginLeft: 15,
    padding: 6,
    borderRadius: 8,
  },

  button: {
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  primary: {
    backgroundColor: "#1E293B",
  },

  secondary: {
    backgroundColor: "#6C47FF",
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 15,
  },

  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.97 }],
  },

  todoContainer: {
    marginTop: 10,
  },
});
