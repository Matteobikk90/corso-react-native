import { Camera } from "@/app/tabs/native-modules/camera";
import { Geolocation } from "@/app/tabs/native-modules/geolocation";
import { Reanimated } from "@/app/tabs/native-modules/reanimated";
import { Sensors } from "@/app/tabs/native-modules/sensors";
import type { TabConfig } from "@/types/navigation";

export const tabs: TabConfig[] = [
  {
    name: "Reanimated",
    title: "React Native Reanimated",
    icon: "link",
    component: Reanimated,
  },
  {
    name: "Sensors",
    title: "Sensors",
    icon: "key",
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
