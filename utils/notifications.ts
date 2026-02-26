import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

export async function registerExpoPushToken() {
  if (!Device.isDevice) throw new Error("Serveun device fisico per le push");

  const { status: existing } = await Notifications.getPermissionsAsync();

  let finalStatus = existing;

  if (existing !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();

    finalStatus = status;
  }

  if (finalStatus !== "granted") throw new Error("Permesso notifiche negato");

  await Notifications.setNotificationChannelAsync("default", {
    name: "default",
    importance: Notifications.AndroidImportance.DEFAULT,
  });

  const token = (await Notifications.getExpoPushTokenAsync()).data;

  return token;
}
