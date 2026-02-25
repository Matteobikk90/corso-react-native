import { Pressable, Text } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export function BouncyBox() {
  const scale = useSharedValue(1);
  const style = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Pressable
      style={{ marginTop: 40, marginHorizontal: "auto" }}
      onPress={() =>
        (scale.value = withSpring(scale.value === 1 ? 1.5 : 1, {
          damping: 14,
          stiffness: 180,
        }))
      }>
      <Animated.View
        style={[
          {
            width: 120,
            height: 120,
            borderRadius: 24,
            backgroundColor: "#4f46e5",
          },
          style,
        ]}
      />
      <Text style={{ marginTop: 8, textAlign: "center" }}>Tap per animare</Text>
    </Pressable>
  );
}
