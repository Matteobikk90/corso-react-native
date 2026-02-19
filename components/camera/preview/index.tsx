// import { Image } from "react-native";

import { Image, Text, View } from "react-native";

type AssetType = {
  asset: {
    uri: string;
    fileName?: string | null | undefined;
  };
};

export const Preview = ({ asset }: AssetType) => {
  if (!asset) return null;

  return (
    <View>
      <Text>{asset.fileName}</Text>
      <Image source={{ uri: asset.uri }} width={200} height={200} />
    </View>
  );
};
