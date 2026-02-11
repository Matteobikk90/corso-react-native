import type { NavigationPropsType } from "@/types/navigation";
import { Pressable, Text, View } from "react-native";

export default function DetailScreen({ navigation }: NavigationPropsType) {
  return (
    <View>
      <Text>Dettaglio</Text>

      <Pressable
        onPress={() =>
          navigation.navigate("Prodotto", {
            id: "1",
            title: "T-Shirt nike",
          })
        }>
        <Text>{"Vai alla pagina Prodotto ===>"}</Text>
      </Pressable>
    </View>
  );
}
