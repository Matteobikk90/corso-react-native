import type { NavigationPropsType } from "@/types/navigation";
import { Pressable, Text, View } from "react-native";

export default function DetailsSecond({
  navigation,
  route,
}: NavigationPropsType) {
  return (
    <View>
      <Text style={{ fontSize: 40 }}>Dettagli - Second</Text>

      <Pressable onPress={() => navigation.getParent()?.navigate("Home")}>
        <Text>{`Torna alla home`}</Text>
      </Pressable>
    </View>
  );
}
