import { colors } from "@/constants/colors";
import { ANIMATION_DURATION } from "@/constants/reanimated";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export function FadeSlideCard() {
  const open = useSharedValue(0);

  const aStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(open.value, { duration: ANIMATION_DURATION }),

      transform: [
        {
          translateY: withTiming(open.value ? 0 : 20, {
            duration: ANIMATION_DURATION,
          }),
        },
        {
          scale: withTiming(open.value ? 1 : 0.9, {
            duration: ANIMATION_DURATION,
          }),
        },
      ],
    };
  });

  const handleToggle = () => (open.value = open.value ? 0 : 1);

  return (
    <View style={styles.container}>
      <Pressable onPress={handleToggle} style={styles.btn}>
        <Text style={styles.btnText}>Toggle card</Text>
      </Pressable>

      <Animated.View style={[styles.card, aStyle]}>
        <Text style={styles.title}>
          Hello reanimated, fade + slide + scale card
        </Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, gap: 12 },
  btn: {
    padding: 10,
    borderRadius: 12,
    backgroundColor: colors.primary,
  },
  btnText: {
    color: "white",
    fontWeight: "600",
  },
  card: {
    width: "100%",
    backgroundColor: colors.headerBg,
    maxWidth: 380,
    borderRadius: 16,
    padding: 16,
  },
  title: {
    fontSize: 16,
    color: "white",
  },
});
