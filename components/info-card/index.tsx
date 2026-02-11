import type { InfoCardType } from "@/components/info-card/types";
import { styles } from "@/constants/styles/card";
import { Text, View } from "react-native";

export function InfoCard({ title, description }: InfoCardType) {
  return (
    <View style={styles.infoCardContainer}>
      <Text style={styles.infoCardTitle}>{title}</Text>
      <Text style={styles.infoCardDescription}>{description}</Text>
    </View>
  );
}
