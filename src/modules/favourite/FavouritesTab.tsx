import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Fragment, useEffect, useState } from "react";
import { MaterialBottomTabScreenProps } from "react-native-paper";
import { AppHeader } from "~/components";
import { Wallpaper } from "~/models";
import { TStackNavigationRoutes, TBottomTabNavigationRoutes } from "~/navigation";
import { WallpaperService } from "~/services";
import { WallpaperList } from "../wallpaper";

type TProps = CompositeScreenProps<
  MaterialBottomTabScreenProps<TBottomTabNavigationRoutes, "HomeTab">,
  NativeStackScreenProps<TStackNavigationRoutes>
>;

export default function FavouritesTab({ navigation }: TProps) {
  const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      WallpaperService.getFavouriteWallpapers()
        .then((data) => {
          console.log(data);
          setWallpapers(data);
        })
        .catch(console.log);
    });

    return unsubscribe;
  }, []);

  function handleWallpaperItemPress(wallpaper: Wallpaper) {
    navigation.push("WallpaperPreviewScreen", { wallpaper });
  }

  return (
    <Fragment>
      <AppHeader title="Favourites" />
      <WallpaperList wallpapers={wallpapers} onItemPress={handleWallpaperItemPress} />
    </Fragment>
  );
}
