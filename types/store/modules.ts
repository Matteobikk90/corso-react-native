import type { AssetType } from "@/components/camera/preview";
import * as ImagePicker from "expo-image-picker";

type coordsType = { lat: number; lng: number };
type XYZ = { x: number; y: number; z: number };

export type NativeModules = {
  asset: Pick<ImagePicker.ImagePickerAsset, "uri" | "fileName"> | null;
  accelerometer: XYZ | null;
  gyroscope: XYZ | null;
  setAsset: ({ asset }: AssetType) => void;
  setStatus: (status: string) => void;
  status: string | undefined;
  coords: coordsType | null;
  setCoords: (coords: coordsType) => void;
  setAccelerometer: (xyz: XYZ) => void;
  setGyroscope: (xyz: XYZ) => void;
};
