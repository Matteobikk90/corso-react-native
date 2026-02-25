import type { AssetType } from "@/components/camera/preview";
import * as ImagePicker from "expo-image-picker";

export type NativeModules = {
  asset: Pick<ImagePicker.ImagePickerAsset, "uri" | "fileName"> | null;
  setAsset: ({ asset }: AssetType) => void;
};
