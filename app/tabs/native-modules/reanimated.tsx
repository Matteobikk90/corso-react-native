import { BouncyBox } from "@/components/reanimated/bouncy-box";
import { FadeSlideCard } from "@/components/reanimated/fade-slice-card";
import { ProgressBarTap } from "@/components/reanimated/progress-bar-tap";
import { View } from "react-native";

export function Reanimated() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
      }}>
      <FadeSlideCard />
      <BouncyBox />
      <ProgressBarTap />
    </View>
  );
}
