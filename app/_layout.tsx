import { exampleTabs } from "@/constants/tabs";
import { tabsOptions } from "@/constants/tabs/options";
import { store } from "@/storeR";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";

// const Tab = createBottomTabNavigator<RootStackParamListType>();

const Drawer = createDrawerNavigator();

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
    <Provider store={store}>
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
    </Provider>
  );
}
