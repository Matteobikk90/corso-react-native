import type { RootStackParamListType } from "@/types/navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-reanimated";
import DetailsScreen from "./screens/details";
import HomeScreen from "./screens/home";

const Stack = createNativeStackNavigator<RootStackParamListType>();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{ headerShown: true }} />
//         <Stack.Screen
//           name="modal"
//           options={{
//             presentation: "modal",
//             title: "Modale 10",
//           }}
//         />
//       </Stack>
//       <StatusBar style="auto" />
//     </ThemeProvider>
//   );
// }

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Dettagli" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
