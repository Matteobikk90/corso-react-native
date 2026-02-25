import { tabs } from "@/constants/tabs";
import { tabsOptions } from "@/constants/tabs/options";
import type { NativeModulesTabParamList } from "@/types/navigation";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator<NativeModulesTabParamList>();

export function NativeModulesTabNavigator() {
  return (
    <Tab.Navigator screenOptions={tabsOptions}>
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
