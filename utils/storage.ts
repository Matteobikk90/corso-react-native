import AsyncStorage from "@react-native-async-storage/async-storage";

export async function storageSet<T>(key: string, value: T) {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error("Storage set error", error);
  }
}

export async function storageGet(key: string) {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error("Storage get error", error);
  }
}

export async function storageRemove(key: string) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error("Storage remove error", error);
  }
}

export async function clearStorage() {
  await AsyncStorage.clear();
}
