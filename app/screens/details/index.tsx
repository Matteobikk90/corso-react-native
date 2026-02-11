import type { NavigationPropsType } from "@/types/navigation";
import { Pressable, Text, View } from "react-native";

export default function DetailMain({ navigation }: NavigationPropsType) {
  return (
    <View>
      <Text style={{ fontSize: 40 }}>Dettagli - Main</Text>

      <Pressable onPress={() => navigation.navigate("DettagliSecond")}>
        <Text>{"Vai alla pagina dettaglio second ===>"}</Text>
      </Pressable>
    </View>
  );
}
