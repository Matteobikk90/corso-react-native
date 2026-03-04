import { Camera } from "@/app/tabs/native-modules/camera";
import type { TabConfig } from "@/types/navigation";
import { lazy } from "react";

const NotificationsWrapper = lazy(
  () => import("../../app/tabs/native-modules/notifications-wrapper")
);

const Reanimated = lazy(
  () => import("../../app/tabs/native-modules/reanimated")
);

const Geolocation = lazy(
  () => import("../../app/tabs/native-modules/geolocation")
);

const Sensors = lazy(() => import("../../app/tabs/native-modules/sensors"));

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
    component: Geolocation,
  },
  {
    name: "Camera",
    title: "Camera",
    icon: "camera",
    component: Camera,
  },
];
