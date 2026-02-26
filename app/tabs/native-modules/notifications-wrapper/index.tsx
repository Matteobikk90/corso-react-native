import { View } from "react-native";
import { ExpoNotificationsLocal } from "./expo-notifications-local";

export function NotificationsWrapper() {
  return (
    <View style={{ padding: 16, gap: 12 }}>
      <ExpoNotificationsLocal />
    </View>
  );
}
