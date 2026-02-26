import { View } from "react-native";
import { ExpoNotificationsDevClient } from "./expo-notifications-dev-client";

export function NotificationsWrapper() {
  return (
    <View style={{ padding: 16, gap: 12 }}>
      <ExpoNotificationsDevClient />
    </View>
  );
}
