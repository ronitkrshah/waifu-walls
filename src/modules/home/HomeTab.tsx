import { Fragment, useEffect, useState } from "react";
import { FlatList, RefreshControl, StyleSheet } from "react-native";
import { WallpaperCategorySFW } from "~/api";
import { AppHeader } from "~/components";
import { Wallpaper } from "~/models";
import { WallpaperService } from "~/services";
import { WallpaperListItem } from "./components";
import { CompositeScreenProps } from "@react-navigation/native";
import { ActivityIndicator, MaterialBottomTabScreenProps, useTheme } from "react-native-paper";
import { TBottomTabNavigationRoutes } from "~/navigation/navigators/BottomTabNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TStackNavigationRoutes } from "~/navigation";
import { Image } from "expo-image";

type TProps = CompositeScreenProps<
  MaterialBottomTabScreenProps<TBottomTabNavigationRoutes, "HomeTab">,
  NativeStackScreenProps<TStackNavigationRoutes>
>;

export default function HomeTab({ navigation }: TProps) {
  const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);
  const theme = useTheme();

  useEffect(() => {
    fetchWallpapers();
  }, []);

  function fetchWallpapers() {
    WallpaperService.getWallpapers("sfw", WallpaperCategorySFW.Waifu).then((walls) => {
      if (walls.length > 0) {
        Image.prefetch(
          walls.map((item) => item.wallpaperUri),
          { cachePolicy: "disk" }
        );
        setWallpapers((p) => [...p, ...walls]);
      }
    });
  }

  function handleWallpaperItemPress(wallpaper: Wallpaper) {
    navigation.push("WallpaperPreviewScreen", { wallpaper });
  }

  return (
    <Fragment>
      <AppHeader title="Waifus" />
      <FlatList
        data={wallpapers}
        numColumns={2}
        initialNumToRender={30}
        columnWrapperStyle={styles.columnWrapper}
        refreshControl={
          <RefreshControl
            refreshing={true}
            colors={[theme.dark ? theme.colors.inversePrimary : theme.colors.primary]}
          />
        }
        onEndReachedThreshold={0.1}
        onEndReached={fetchWallpapers}
        ListFooterComponent={<ActivityIndicator size={"small"} />}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => {
          return <WallpaperListItem wallpaper={item} onPress={handleWallpaperItemPress} />;
        }}
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
