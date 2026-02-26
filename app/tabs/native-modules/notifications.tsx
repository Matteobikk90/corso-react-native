import { colors } from "@/constants/colors";
import { TOKEN_KEY } from "@/constants/notifications";
import { useStore } from "@/storeZ";
import { registerExpoPushToken } from "@/utils/notifications";
import { storageGet, storageRemove, storageSet } from "@/utils/storage";
import { useCallback, useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import { useShallow } from "zustand/react/shallow";

export function ExpoNotifications() {
  const { status, setStatus, token, setToken } = useStore(
    useShallow((state) => ({
      status: state.status,
      setStatus: state.setStatus,
      token: state.token,
      setToken: state.setToken,
    }))
  );

  const loadToken = useCallback(async () => {
    const savedToken = await storageGet(TOKEN_KEY);

    if (savedToken) setToken(savedToken);
  }, [setToken]);

  useEffect(() => {
    loadToken();
  }, [loadToken]);

  const handleEnable = async () => {
    try {
      const token = await registerExpoPushToken();

      setToken(token);

      setStatus("granted");

      await storageSet(TOKEN_KEY, token);
    } catch (error) {
      setStatus("denied");
      console.error("Error", error);
    }
  };

  const handleClear = async () => {
    await storageRemove(TOKEN_KEY);

    setToken("");
  };

  return (
    <View style={{ padding: 16, gap: 12 }}>
      <Text>Status: {status}</Text>

      <Text selectable>Expo token: {token}</Text>

      <Pressable
        onPress={handleEnable}
        style={{ padding: 12, backgroundColor: colors.primary }}>
        <Text>Abilita + salva token</Text>
      </Pressable>

      <Pressable
        onPress={handleClear}
        style={{ padding: 12, backgroundColor: colors.inactive }}>
        <Text>Pulisci token</Text>
      </Pressable>
    </View>
  );
}
