import { colors } from "@/constants/colors";
import * as Notifications from "expo-notifications";
import { useCallback, useEffect } from "react";
import { Pressable, Text, View } from "react-native";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: false,
  }),
});

export function ExpoNotificationsLocal() {
  const loadNotifications = useCallback(async () => {
    const { status } = await Notifications.requestPermissionsAsync();

    console.log("Permissions", status);

    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.DEFAULT,
    });
  }, []);

  const triggerLocal = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Local test",
        body: "Questa è una local notification",
        data: { from: "local" },
      },
      trigger: {
        seconds: 3,
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      },
    });
  };

  useEffect(() => {
    loadNotifications();
  }, [loadNotifications]);

  return (
    <View>
      <Text>Expo go: test local notifications</Text>

      <Pressable
        onPress={triggerLocal}
        style={{ padding: 12, backgroundColor: colors.primary }}>
        <Text>Trigger local notifications (3s)</Text>
      </Pressable>
    </View>
  );
}
