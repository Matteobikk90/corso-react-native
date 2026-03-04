import type { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { Easing } from "react-native-reanimated";
import { colors } from "../colors";

export const tabsOptions: BottomTabNavigationOptions = {
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
  transitionSpec: {
    animation: "timing",
    config: {
      duration: 1000,
      easing: Easing.inOut(Easing.ease),
    },
  },
};
