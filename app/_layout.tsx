import { exampleTabs } from "@/constants/tabs";
import { tabsOptions } from "@/constants/tabs/options";
import type { RootStackParamListType } from "@/types/navigation";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator<RootStackParamListType>();

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
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator initialRouteName="Home" screenOptions={tabsOptions}>
        {exampleTabs.map(({ icon, title, name, component }) => (
          <Tab.Screen
            key={name}
            name={name}
            component={component}
            options={{
              title,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name={icon} size={size} color={color} />
              ),
            }}
          />
        ))}
      </Tab.Navigator>
    </SafeAreaView>
  );
}
