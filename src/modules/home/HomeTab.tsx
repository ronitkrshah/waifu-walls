import { Fragment, useEffect, useState } from "react";
import { AppHeader } from "~/components";
import { Wallpaper } from "~/models";
import { WallpaperService } from "~/services";
import { CompositeScreenProps } from "@react-navigation/native";
import { MaterialBottomTabScreenProps } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TStackNavigationRoutes, TBottomTabNavigationRoutes } from "~/navigation";
import { Image } from "expo-image";
import { WallpaperList } from "../wallpaper";
import { WallpaperCategorySFW } from "~/api";

type TProps = CompositeScreenProps<
  MaterialBottomTabScreenProps<TBottomTabNavigationRoutes, "HomeTab">,
  NativeStackScreenProps<TStackNavigationRoutes>
>;

export default function HomeTab({ navigation }: TProps) {
  const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);

  useEffect(() => {
    fetchWallpapers();
  }, []);

  function fetchWallpapers() {
    WallpaperService.getWallpapers("sfw", WallpaperCategorySFW.Waifu).then((walls) => {
      if (walls.length > 0) {
        setWallpapers((p) => [...p, ...walls]);
        Image.prefetch(
          walls.map((item) => item.wallpaperUri),
          { cachePolicy: "disk" },
        );
      }
    });
  }

  function handleWallpaperItemPress(wallpaper: Wallpaper) {
    navigation.push("WallpaperPreviewScreen", { wallpaper });
  }

  return (
    <Fragment>
      <AppHeader title="Waifus" />
      <WallpaperList
        wallpapers={wallpapers}
        onItemPress={handleWallpaperItemPress}
        onEndReached={fetchWallpapers}
        onRefresh={() => {
          setWallpapers([]);
          fetchWallpapers();
        }}
      />
    </Fragment>
  );
}
