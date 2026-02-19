import { tabs } from "@/constants/tabs";
import type { NativeModulesTabParamList } from "@/types/navigation";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator<NativeModulesTabParamList>();

export function NativeModulesTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        const tab = tabs.find((t) => t.name === route.name);

        return {
          headerStyle: { backgroundColor: "#1a1a2e" },
          headerTitleStyle: { fontWeight: "800", color: "white" },
          tabBarStyle: {
            backgroundColor: "#fff",
            borderTopWidth: 1,
            borderTopColor: "#f0f0f0",
            height: 60,
            paddingVertical: 8,
          },
          tabBarActiveTintColor: "#6c47ff",
          tabBarInactiveTintColor: "#aaa",
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: "600",
            color: "#000",
          },
          animation: "fade",
          tabBarIcon: ({ color, size, focused }) => {
            const iconName = tab?.icon;

            return (
              <Ionicons
                name={focused ? iconName : `${iconName}-outline`}
                size={size}
                color={color}
              />
            );
          },
        };
      }}>
      {tabs.map(({ name, title, component }) => (
        <Tab.Screen
          key={name}
          name={name}
          options={{ title }}
          component={component}
        />
      ))}
    </Tab.Navigator>
  );
}
