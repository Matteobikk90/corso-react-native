import { styles } from "@/components/info-card/styles";
import { Text, View } from "react-native";
import type { InfoCardType } from "./info-card/types";

export function InfoCard({ title, description }: InfoCardType) {
  const [useState, setUseState] = useState(false);

  console.log(this.state);

  return (
    <View style={styles.infoCardContainer}>
      <Text style={styles.infoCardTitle}>{title}</Text>
      <Text style={styles.infoCardDescription}>{this.props.description}</Text>
    </View>
  );
}
