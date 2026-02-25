import { PermissionBox } from "@/components/permission-box";
import { colors } from "@/constants/colors";
import { useStore } from "@/storeZ";
import { getOnce } from "@/utils/geolocation";
import * as Location from "expo-location";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useShallow } from "zustand/react/shallow";

export function Geolocation() {
  const { status, coords, setCoords, setStatus } = useStore(
    useShallow(({ status, coords, setCoords, setStatus }) => ({
      status,
      coords,
      setCoords,
      setStatus,
    }))
  );

  const resquestPermission = async () => {
    const res = await Location.requestForegroundPermissionsAsync();
    setStatus(res.status);
  };

  const handleGetOnce = async () => {
    const pos = await getOnce();
    console.log(pos);
    setCoords(pos);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Geolocalizzazione</Text>

      <PermissionBox
        title="Geolocalizzazione"
        statusText={status}
        request={resquestPermission}
        warning={
          status === "denied" ? "Permesso negato: apri impostazioni" : undefined
        }
      />

      <View style={styles.row}>
        <Pressable style={styles.btn} onPress={handleGetOnce}>
          <Text style={styles.btnText}>Get once</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={() => {}}>
          <Text style={styles.btnText}>Start watch</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={() => {}}>
          <Text style={styles.btnText}>Stop</Text>
        </Pressable>
      </View>

      <View style={styles.card}>
        <Text style={styles.value}>
          Lat: {coords ? coords.lat.toFixed(2) : "-"}
        </Text>
        <Text style={styles.value}>
          Lng: {coords ? coords.lng.toFixed(2) : "-"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0F172A",
  },
  row: { flexDirection: "row", gap: 10 },
  card: { backgroundColor: "#fff", padding: 16, borderRadius: 16, gap: 8 },
  btn: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingVertical: 12,
    borderRadius: 12,
  },
  btnText: {
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.9 }],
  },
  value: { fontWeight: "700", color: colors.headerBg },
});
