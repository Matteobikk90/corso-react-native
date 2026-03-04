import { Image } from "expo-image";
import { Platform, StyleSheet, Text, View } from "react-native";

export type AssetType = {
  asset: {
    uri: string;
    fileName?: string | null;
  };
};

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export const Preview = ({ asset }: AssetType) => {
  if (!asset) return null;

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: asset.uri }}
        style={styles.image}
        placeholder={{ blurhash }}
        transition={3000}
      />

      {asset.fileName && <Text style={styles.fileName}>{asset.fileName}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    padding: 16,
    gap: 12,

    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.12,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 6 },
      },
      android: {
        elevation: 5,
      },
    }),
  },

  image: {
    width: "100%",
    height: 240,
    borderRadius: 14,
  },

  fileName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#475569",
  },
});
