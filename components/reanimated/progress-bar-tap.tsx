import { colors } from "@/constants/colors";
import { ANIMATION_DURATION } from "@/constants/reanimated";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export function ProgressBarTap() {
  const [progressState, setProgressState] = useState(0.25);
  const progress = useSharedValue(0.25);

  const barStyle = useAnimatedStyle(() => {
    const percentage = Math.round(progress.value * 100);

    return { width: `${percentage}%` };
  });

  const handleTap = () => {
    const next =
      progress.value >= 1 ? 0.1 : Number((progress.value + 0.25).toFixed(2));

    progress.value = withTiming(next, { duration: ANIMATION_DURATION });
    setProgressState(next);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleTap} style={styles.btn}>
        <Text style={styles.btnText}>Tap bar</Text>
      </Pressable>

      <View style={styles.track}>
        <Animated.View style={[styles.bar, barStyle]}></Animated.View>
      </View>

      <Text style={styles.title}>
        Progress: {Math.round(progressState * 100)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, gap: 12 },
  btn: {
    padding: 10,
    borderRadius: 12,
    backgroundColor: colors.inactive,
  },
  btnText: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
  },
  track: {
    width: "100%",
    height: 14,
    backgroundColor: colors.headerBg,
    maxWidth: 380,
    borderRadius: 16,

    overflow: "hidden",
  },
  title: {
    fontSize: 16,
  },
  bar: {
    height: "100%",
    borderRadius: 999,
    backgroundColor: colors.primary,
  },
});
