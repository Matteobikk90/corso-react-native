import type { NavigationPropsType } from "@/types/navigation";
import { Pressable, Text, View } from "react-native";

export default function HomeScreen({ navigation }: NavigationPropsType) {
  return (
    <View>
      <Text>Homescreen</Text>

      <Pressable onPress={() => navigation.navigate("Dettagli")}>
        <Text>{"Vai alla pagina Dettaglio ===>"}</Text>
      </Pressable>
    </View>
  );
}
