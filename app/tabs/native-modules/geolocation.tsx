import { StyleSheet, Text, View } from "react-native";

export function Geolocation() {
  return (
    <View style={styles.inner}>
      <Text style={styles.title}>Geolocalizzazione</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  inner: {
    gap: 28,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0F172A",
  },
});
