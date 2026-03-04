import { tabs } from "@/constants/tabs";
import { tabsOptions } from "@/constants/tabs/options";
import type {
  DrawerParamList,
  NativeModulesTabParamList,
} from "@/types/navigation";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import type { NavigationProp } from "@react-navigation/native";
import { ScreenErrorBoundary } from "./error-boundary";

type Props = {
  navigation: NavigationProp<DrawerParamList>;
};

const Tab = createBottomTabNavigator<NativeModulesTabParamList>();

export function NativeModulesTabNavigator({ navigation }: Props) {
  return (
    <ScreenErrorBoundary onReset={() => navigation.navigate("Home")}>
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
    </ScreenErrorBoundary>
  );
}
