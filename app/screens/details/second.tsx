import type { DetailsStackParamList } from "@/types/navigation";
import type { DrawerScreenProps } from "@react-navigation/drawer";
import { Pressable, Text, View } from "react-native";

export default function DetailsSecond({
  navigation,
}: DrawerScreenProps<DetailsStackParamList, "DettagliSecond">) {
  return (
    <View>
      <Text style={{ fontSize: 40 }}>Dettagli - Second</Text>

      <Pressable onPress={() => navigation.getParent()?.navigate("Home")}>
        <Text>{`Torna alla home`}</Text>
      </Pressable>
    </View>
  );
}
