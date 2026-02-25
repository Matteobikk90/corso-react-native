import { Camera } from "@/app/tabs/native-modules/camera";
import { Geolocation } from "@/app/tabs/native-modules/geolocation";
import type { TabConfig } from "@/types/navigation";

export const tabs: TabConfig[] = [
  {
    name: "Camera",
    title: "Camera",
    icon: "camera",
    component: Camera,
  },
  {
    name: "Geolocation",
    title: "Geolocation",
    icon: "location",
    component: Geolocation,
  },
];
