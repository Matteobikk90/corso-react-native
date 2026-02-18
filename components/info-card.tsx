import { styles } from "@/components/info-card/styles";
import { Text, View } from "react-native";
import type { InfoCardType } from "./info-card/types";

export function InfoCard({ title, description }: InfoCardType) {
  return (
    <View style={styles.infoCardContainer}>
      <Text style={styles.infoCardTitle}>{title}</Text>
      <Text style={styles.infoCardDescription}>{description}</Text>
    </View>
  );
}
