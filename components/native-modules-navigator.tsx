import { colors } from "@/constants/colors";
import { tabs } from "@/constants/tabs";
import type { NativeModulesTabParamList } from "@/types/navigation";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator<NativeModulesTabParamList>();

export function NativeModulesTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.headerBg,
          shadowColor: colors.headerBg, // remove iOS border
          elevation: 0, // remove Android shadow
        },
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: "700",
          color: colors.primary,
        },
        headerTitleAlign: "center",
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.inactive,
        tabBarStyle: {
          paddingTop: 8,
          paddingBottom: 10,
          backgroundColor: colors.headerBg,
          height: 70,
          shadowColor: colors.headerBg,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        animation: "fade",
      }}>
      {tabs.map(({ name, title, component, icon }) => (
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
  );
}
