import type { NavigatorScreenParams } from "@react-navigation/native";

export type DetailsStackParamList = {
  DettagliMain: undefined;
  DettagliSecond: undefined; // or { from?: string; } | undefined
};

export type DrawerParamList = {
  Home: undefined;
  Dettagli: NavigatorScreenParams<DetailsStackParamList>;
  Prodotto: undefined;
};
