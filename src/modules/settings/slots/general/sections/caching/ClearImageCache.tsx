import { ToastAndroid, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { Image } from "expo-image";

export default function ClearImageCache() {
  async function clearImageCache() {
    try {
      await Image.clearMemoryCache();
      await Image.clearDiskCache();
      ToastAndroid.show("Cleard Cache", ToastAndroid.SHORT);
    } catch (e) {
      ToastAndroid.show("Can't Clear Cache", ToastAndroid.SHORT);
    }
  }

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Text variant="bodyLarge" style={{ flex: 1 }}>
        Clear Stored Image Cache
      </Text>
      <Button mode="contained" onPress={clearImageCache}>
        Clear
      </Button>
    </View>
  );
}
