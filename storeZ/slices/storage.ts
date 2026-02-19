import { LAST_SYNC, TODOD_CACHE_KEY } from "@/constants/storage";
import type { StorageStateSliceType } from "@/types/store/storage";
import { storageGet } from "@/utils/storage";
import type { StateCreator } from "zustand";

export const createSliceStorage: StateCreator<StorageStateSliceType> = (
  set,
  get
) => ({
  loadFromCache: async () => {
    try {
      const cachedTodos = await storageGet(TODOD_CACHE_KEY);
      const lastSync = await storageGet(LAST_SYNC);

      if (cachedTodos) {
        console.log("Loaded from cache", cachedTodos.length);
        set({ todos: cachedTodos });
      }
    } catch (error) {
      console.error("Failed to load cache");
    }
  },
  clearCache: () => {},
});
