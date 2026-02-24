import type Ionicons from "@expo/vector-icons/Ionicons";
import type { NavigatorScreenParams } from "@react-navigation/native";
import type { ComponentType } from "react";

export type DetailsStackParamList = {
  DettagliMain: undefined;
  DettagliSecond: undefined; // or { from?: string; } | undefined
};

export type DrawerParamList = {
  Home: undefined;
  Dettagli: NavigatorScreenParams<DetailsStackParamList>;
  Prodotto: undefined;
  ModuliNativi: undefined;
};

export type NativeModulesTabParamList = {
  Camera: undefined;
  Location: undefined;
  Notifications: undefined;
  Haptics: undefined;
  Biometrics: undefined;
};

export type TabConfig = {
  name: keyof NativeModulesTabParamList;
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  component: ComponentType;
};
