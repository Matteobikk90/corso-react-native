import { Preview } from "@/components/camera/preview";
import { pickFromLibrary, takePhotoFromCamera } from "@/utils/camera";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Linking, Pressable, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export function CameraComponent() {
  const [asset, setAseet] = useState<ImagePicker.ImagePickerAsset | null>(null);

  const handleClick = async (isFromCamera: boolean) => {
    if (isFromCamera) {
      setAseet(await takePhotoFromCamera());
    } else {
      setAseet(await pickFromLibrary());
    }
  };

  return (
    <ScrollView style={style.container}>
      <View style={style.innerContainer}>
        <Text style={style.title}>Camera e Galleria</Text>
        <Pressable
          onPress={() => Linking.openSettings()}
          style={[style.btn, { backgroundColor: "#1a1a3e" }]}>
          <Text>Permessi</Text>
        </Pressable>

        <View style={style.btnBox}>
          <Pressable
            onPress={() => handleClick(true)}
            style={[style.btn, { backgroundColor: "#1a1a3e" }]}>
            <Text style={style.btnText}>Fotocamera</Text>
          </Pressable>

          <Pressable
            onPress={() => handleClick(false)}
            style={[style.btn, { backgroundColor: "#6C47FF" }]}>
            <Text style={style.btnText}>Galleria</Text>
          </Pressable>
        </View>

        {asset ? <Preview asset={asset} /> : <Text>Nessuna foto</Text>}
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: { padding: 16 },
  innerContainer: { gap: 30 },
  title: { fontSize: 18, fontWeight: "700", color: "#1a1a2e" },
  btnBox: { gap: 10, flexDirection: "row" },
  btn: { flex: 1, padding: 14, borderRadius: 10, alignItems: "center" },
  btnText: {
    color: "white",
  },
});
