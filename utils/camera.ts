import { QUALITY_IMAGE } from "@/constants/camera";
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";

export async function pickFromLibrary() {
  const perm = await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (!perm.granted) {
    Alert.alert(
      "Permesso negato",
      "Abilità l'accesso alla galleria nelle impostazioni"
    );
    return null;
  }

  const result = await ImagePicker.launchImageLibraryAsync({
    quality: QUALITY_IMAGE,
    mediaTypes: "images",
  });

  if (result.canceled) return null;

  return result.assets[0];
}

export async function takePhotoFromCamera(granted: boolean) {
  if (!granted) {
    Alert.alert(
      "Permesso negato",
      "Abilità l'accesso alla fotocamera nelle impostazioni"
    );
    return null;
  }

  const result = await ImagePicker.launchCameraAsync({
    quality: QUALITY_IMAGE,
  });

  if (result.canceled) return null;

  return result.assets[0];
}
