import { Wallpaper } from "~/models";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "expo-image";

type TProps = {
  wallpaper: Wallpaper;
  onPress?(wallpaper: Wallpaper): void;
};

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export function WallpaperListItem({ wallpaper, onPress }: TProps) {
  function handlePress() {
    onPress?.(wallpaper);
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image source={{ uri: wallpaper.wallpaperUri }} style={StyleSheet.absoluteFillObject} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: SCREEN_WIDTH * 0.75,
    width: SCREEN_WIDTH * 0.5 - 16,
    borderRadius: 16,
    overflow: "hidden",
  },
});
