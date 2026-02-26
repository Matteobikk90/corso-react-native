import { initialNotificationsStateZustand } from "@/reducers/constants";
import type { NotificationsType } from "@/types/store/notifications";
import type { StateCreator } from "zustand";

export const createSliceNotifications: StateCreator<NotificationsType> = (
  set
) => ({
  ...initialNotificationsStateZustand,
  setStatus: (status: string) => set({ status }),
  setToken: (token: string) => set({ token }),
});
