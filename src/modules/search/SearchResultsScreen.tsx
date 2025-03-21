import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image } from "expo-image";
import { Fragment, useState } from "react";
import { AppHeader } from "~/components";
import { Wallpaper } from "~/models";
import { TStackNavigationRoutes } from "~/navigation";
import { WallpaperService } from "~/services";
import { WallpaperList } from "../shared";

type TProps = NativeStackScreenProps<TStackNavigationRoutes, "SearchResultsScreen">;

export default function SearchResultsScreen({ navigation, route }: TProps) {
  const payload = route.params;
  const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);

  async function fetchWallpapers() {
    WallpaperService.getWallpapers(payload.wallpaperType, payload.wallpaperCategory).then(
      (walls) => {
        if (walls.length > 0) {
          setWallpapers((p) => [...p, ...walls]);
        }
      },
    );
  }

  function handleWallpaperItemPress(wallpaper: Wallpaper) {
    navigation.push("WallpaperPreviewScreen", { wallpaper });
  }

  return (
    <Fragment>
      <AppHeader title="Search" headerMode="small" navigation={navigation} />
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
