import type { NavigationPropsType } from "@/types/navigation";
import { Pressable, Text, View } from "react-native";

export default function ProductScreen({
  navigation,
  route,
}: NavigationPropsType) {
  return (
    <View>
      <Text style={{ fontSize: 40 }}>Prodotto</Text>

      <Pressable onPress={() => navigation.popToTop()}>
        <Text>{"Torna alla prima pagina dello stack"}</Text>
      </Pressable>
    </View>
  );
}
