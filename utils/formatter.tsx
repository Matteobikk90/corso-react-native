import { styles } from "@/constants/styles/hello-world";
import { Text } from "react-native";

const isVisible = true;

export const handleLogic2 = () =>
  isVisible ? <Text style={styles.paragraph}>This is visible!</Text> : null;
