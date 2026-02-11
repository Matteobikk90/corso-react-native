import { Easing } from "react-native-reanimated";

export const tabsOptions = {
  headerShown: false,
  tabBarActiveTintColor: "red",
  tabBarInactiveTintColor: "blue",
  tabBarStyle: {
    paddingTop: 8,
    paddingBottom: 10,
    backgroundColor: "white",
    height: 70,
  },
  tabBarLabelStyle: {
    fontSize: 12,
  },
  animation: "shift",
  transitionSpec: {
    animation: "timing",
    config: {
      duration: 1500,
      easing: Easing.inOut(Easing.ease),
    },
  },
};
