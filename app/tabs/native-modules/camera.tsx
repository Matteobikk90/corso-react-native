import { Preview } from "@/components/camera/preview";
import { useStore } from "@/storeZ";
import { pickFromLibrary, takePhotoFromCamera } from "@/utils/camera";
import {
  Linking,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useShallow } from "zustand/react/shallow";

export function CameraComponent() {
  const { asset, setAsset } = useStore(
    useShallow(({ asset, setAsset }) => ({
      asset,
      setAsset,
    }))
  );

  const handleClick = async (isFromCamera: boolean) => {
    const result = isFromCamera
      ? await takePhotoFromCamera()
      : await pickFromLibrary();

    setAsset({ asset: result! });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Camera e Galleria</Text>

        {/* Permissions Button */}
        <Pressable
          onPress={Linking.openSettings}
          style={({ pressed }) => [
            styles.button,
            styles.outline,
            pressed && styles.pressed,
          ]}>
          <Text style={[styles.buttonText, styles.outlineText]}>Permessi</Text>
        </Pressable>

        <View style={styles.row}>
          {/* Camera */}
          <Pressable
            onPress={() => handleClick(true)}
            style={({ pressed }) => [
              styles.button,
              styles.primary,
              pressed && styles.pressed,
            ]}>
            <Text style={styles.buttonText}>Fotocamera</Text>
          </Pressable>

          {/* Gallery */}
          <Pressable
            onPress={() => handleClick(false)}
            style={({ pressed }) => [
              styles.button,
              styles.secondary,
              pressed && styles.pressed,
            ]}>
            <Text style={styles.buttonText}>Galleria</Text>
          </Pressable>
        </View>

        {asset ? (
          <Preview asset={asset} />
        ) : (
          <Text style={styles.empty}>Nessuna foto</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  inner: {
    gap: 28,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0F172A",
  },
  row: {
    flexDirection: "row",
    gap: 14,
  },

  button: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",

    // Shadow
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
      },
      // android: {
      //   elevation: 4,
      // },
    }),
  },

  primary: {
    backgroundColor: "#1E293B",
  },

  secondary: {
    backgroundColor: "#6C47FF",
  },

  outline: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderColor: "#6C47FF",
  },

  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.97 }],
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },

  outlineText: {
    color: "#6C47FF",
  },

  empty: {
    textAlign: "center",
    color: "#64748B",
    fontSize: 14,
  },
});
