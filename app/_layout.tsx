import { exampleTabs } from "@/constants/tabs";
import { tabsOptions } from "@/constants/tabs/options";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";

// const Tab = createBottomTabNavigator<RootStackParamListType>();

const Drawer = createDrawerNavigator();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <ThemeProvider value={colorScheme === "dark" ? DarkThz`weme : DefaultTheme}>
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
      <Drawer.Navigator initialRouteName="Home" screenOptions={tabsOptions}>
        {exampleTabs.map(({ icon, title, name, component }) => (
          <Drawer.Screen
            key={name}
            name={name}
            component={component}
            options={{
              title,
              drawerIcon: ({ color, size }) => (
                <Ionicons name={icon} size={size} color={color} />
              ),
            }}
          />
        ))}
      </Drawer.Navigator>
    </SafeAreaView>
  );
}
