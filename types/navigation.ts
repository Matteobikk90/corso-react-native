import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamListType = {
  Home: undefined;
  Dettagli: undefined;
};
export type NavigationPropsType =
  NativeStackScreenProps<RootStackParamListType>;
