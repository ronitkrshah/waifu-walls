import { Fragment, useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { WallpaperCategorySFW } from "~/api";
import { AppHeader } from "~/components";
import { Wallpaper } from "~/models";
import { WallpaperService } from "~/services";
import { WallpaperListItem } from "./components";
import { CompositeScreenProps } from "@react-navigation/native";
import { MaterialBottomTabScreenProps } from "react-native-paper";
import { TBottomTabNavigationRoutes } from "~/navigation/navigators/BottomTabNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TStackNavigationRoutes } from "~/navigation";

type TProps = CompositeScreenProps<
  MaterialBottomTabScreenProps<TBottomTabNavigationRoutes, "HomeTab">,
  NativeStackScreenProps<TStackNavigationRoutes>
>;

export default function HomeTab({ navigation }: TProps) {
  const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);

  console.log("render");

  useEffect(() => {
    WallpaperService.getWallpapers("sfw", WallpaperCategorySFW.Waifu).then((walls) => {
      walls.length > 0 && setWallpapers((p) => [...p, ...walls]);
    });
  }, []);

  function handleWallpaperItemPress(wallpaper: Wallpaper) {
    console.log(wallpaper);
  }

  return (
    <Fragment>
      <AppHeader title="Waifus" />
      <FlatList
        data={wallpapers}
        numColumns={2}
        initialNumToRender={30}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => (
          <WallpaperListItem wallpaper={item} onPress={handleWallpaperItemPress} />
        )}
        keyExtractor={(item, index) => `${item.wallpaperId}_${index}`}
      />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: "center",
    gap: 8,
  },
  columnWrapper: {
    gap: 8,
  },
});
