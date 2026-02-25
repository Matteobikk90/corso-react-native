import { colors } from "@/constants/colors";
import { useStore } from "@/storeZ";
import { Accelerometer, Gyroscope } from "expo-sensors";
import { useEffect, useRef } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useShallow } from "zustand/react/shallow";

export function Sensors() {
  const accRef = useRef<{ remove: () => void | null }>(null);
  const gyrRef = useRef<{ remove: () => void | null }>(null);
  const { setAccelerometer, setGyroscope, accelerometer, gyroscope } = useStore(
    useShallow(
      ({ setAccelerometer, setGyroscope, accelerometer, gyroscope }) => ({
        setAccelerometer,
        setGyroscope,
        accelerometer,
        gyroscope,
      })
    )
  );

  const startAcc = () => {
    Accelerometer.setUpdateInterval(200);
    accRef.current?.remove();
    accRef.current = Accelerometer.addListener((xyz) => setAccelerometer(xyz));
  };

  const stopAcc = () => {
    accRef.current?.remove();
    accRef.current = null;
  };

  const startGyr = () => {
    Gyroscope.setUpdateInterval(200);
    gyrRef.current?.remove();
    gyrRef.current = Gyroscope.addListener((xyz) => setGyroscope(xyz));
  };

  const stopGyr = () => {
    gyrRef.current?.remove();
    gyrRef.current = null;
  };

  useEffect(() => {
    return () => {
      stopAcc();
      stopGyr();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sensors</Text>

      <View style={styles.row}>
        <Pressable style={styles.btn} onPress={startAcc}>
          <Text style={styles.btnText}>Start acc</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={stopAcc}>
          <Text style={styles.btnText}>Stop acc</Text>
        </Pressable>
      </View>

      <View style={styles.card}>
        <Text style={styles.value}>Accelerometer</Text>
        {console.log(accelerometer) as any}
        <Text style={styles.value}>
          X: {accelerometer ? accelerometer?.x.toFixed(6) : "-"}
        </Text>
        <Text style={styles.value}>
          Y: {accelerometer ? accelerometer?.y.toFixed(6) : "-"}
        </Text>
        <Text style={styles.value}>
          Z: {accelerometer ? accelerometer?.z.toFixed(6) : "-"}
        </Text>
      </View>

      <View style={styles.row}>
        <Pressable style={styles.btn} onPress={startGyr}>
          <Text style={styles.btnText}>Start gyr</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={stopGyr}>
          <Text style={styles.btnText}>Stop gyr</Text>
        </Pressable>
      </View>

      <View style={styles.card}>
        <Text style={styles.value}>Gyroscope</Text>
        <Text style={styles.value}>
          X: {gyroscope ? gyroscope?.x.toFixed(6) : "-"}
        </Text>
        <Text style={styles.value}>
          Y: {gyroscope ? gyroscope?.y.toFixed(6) : "-"}
        </Text>
        <Text style={styles.value}>
          Z: {gyroscope ? gyroscope?.z.toFixed(6) : "-"}
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
