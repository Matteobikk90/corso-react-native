import DetailMain from "@/app/screens/details/index";
import DetailsSecond from "@/app/screens/details/second";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export function DetailsStackNavigator() {
  const Stack = createNativeStackNavigator();

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
