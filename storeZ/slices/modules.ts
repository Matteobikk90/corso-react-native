import { initialModulesStateZustand } from "@/reducers/constants";
import type { NativeModules } from "@/types/store/modules";
import type { StateCreator } from "zustand";

export const createSliceModules: StateCreator<NativeModules> = (set, get) => ({
  ...initialModulesStateZustand,
  setAsset: ({ asset }) =>
    set({
      asset,
    }),
});
