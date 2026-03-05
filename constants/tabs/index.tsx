import { Camera } from "@/app/tabs/native-modules/camera";
import GeolocationTab from "@/app/tabs/native-modules/geolocation";
import NotificationsWrapper from "@/app/tabs/native-modules/notifications-wrapper";
import Reanimated from "@/app/tabs/native-modules/reanimated";
import Sensors from "@/app/tabs/native-modules/sensors";
import type { TabConfig } from "@/types/navigation";

export const tabs: TabConfig[] = [
  {
    name: "Notifications",
    title: "Notifications",
    icon: "notifications",
    component: NotificationsWrapper,
  },
  {
    name: "Reanimated",
    title: "React Native Reanimated",
    icon: "heart-circle",
    component: Reanimated,
  },
  {
    name: "Sensors",
    title: "Sensors",
    icon: "bluetooth",
    component: Sensors,
  },
  {
    name: "Geolocation",
    title: "Geolocation",
    icon: "location",
    component: GeolocationTab,
  },
  {
    name: "Camera",
    title: "Camera",
    icon: "camera",
    component: Camera,
  },
];
