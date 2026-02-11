import DetailMain from "@/app/screens/details/index";
import DetailsSecond from "@/app/screens/details/second";
import type { DetailsStackParamList } from "@/types/navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export function DetailsStackNavigator() {
  const Stack = createNativeStackNavigator<DetailsStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DettagliMain"
        component={DetailMain}
        options={{ title: "Dettagli Main" }}
      />
      <Stack.Screen
        name="DettagliSecond"
        component={DetailsSecond}
        options={{ title: "Dettagli Second" }}
      />
    </Stack.Navigator>
  );
}
