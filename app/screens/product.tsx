import type { DrawerParamList } from "@/types/navigation";
import type { DrawerScreenProps } from "@react-navigation/drawer";
import { Pressable, Text, View } from "react-native";

export default function ProductScreen({
  navigation,
  route,
}: DrawerScreenProps<DrawerParamList, "Prodotto">) {
  return (
    <View>
      <Text style={{ fontSize: 40 }}>Prodotto</Text>

      <Pressable onPress={() => navigation.goBack()}>
        <Text>{"Torna alla prima pagina dello stack"}</Text>
      </Pressable>
    </View>
  );
}
