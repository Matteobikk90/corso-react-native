import { colors } from "@/constants/colors";
import { Linking, Pressable, StyleSheet, Text, View } from "react-native";

type PermissionsBoxType = {
  title: string;
  statusText: string | undefined;
  request: () => void;
  warning?: string;
};

export function PermissionBox({
  title,
  statusText,
  request,
  warning,
}: PermissionsBoxType) {
  console.log(statusText);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.status}>Status: {statusText}</Text>
      {warning ? <Text style={styles.warning}>{warning}</Text> : null}
      <View>
        <Pressable
          onPress={request}
          style={({ pressed }) => [
            styles.btn,
            styles.outlineBtn,
            pressed && styles.pressed,
          ]}>
          <Text>Richiedi</Text>
        </Pressable>

        <Pressable
          onPress={Linking.openSettings}
          style={({ pressed }) => [
            styles.btn,
            styles.outlineBtn,
            pressed && styles.pressed,
          ]}>
          <Text style={[styles.btnText, styles.outlineText]}>Impostazioni</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    gap: 10,
  },
  title: { fontSize: 18, fontWeight: "700", color: colors.headerBg },
  status: {
    color: "#334155",
    fontWeight: "600",
  },
  warning: {
    color: "#b91c1c",
    fontWeight: "600",
  },
  row: {
    flexDirection: "row",
    gap: 10,
  },
  btn: { flex: 1, backgroundColor: "", paddingVertical: 12, borderRadius: 12 },
  btnText: {
    color: "#fff",
    fontWeight: "700",
  },
  outlineBtn: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderColor: colors.primary,
  },
  outlineText: { color: colors.primary },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.9 }],
  },
});
