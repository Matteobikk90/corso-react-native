import type { NavigationPropsType } from "@/types/navigation";
import { Pressable, Text } from "react-native";

export default function DetailsScreen({ navigation }: NavigationPropsType) {
  return (
    <Pressable onPress={() => navigation.goBack()}>
      <Text>{"Vai alla pagina indietro"}</Text>
    </Pressable>
  );
}
