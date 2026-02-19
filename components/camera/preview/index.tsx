import { Image } from "react-native";

export function Preview({ uri }: { uri: string | null }) {
  if (!uri) return null;

  return (
    <Image
      source={{ uri }}
      style={{ width: 220, height: 220, borderRadius: 16 }}
      resizeMode="cover"
    />
  );
}
