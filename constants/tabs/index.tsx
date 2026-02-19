import { CameraComponent } from "@/app/tabs/native-modules/camera";
import type { TabConfig } from "@/types/navigation";

export const tabs: TabConfig[] = [
  {
    name: "Camera",
    title: "Camera",
    icon: "camera",
    component: CameraComponent,
  },
];
