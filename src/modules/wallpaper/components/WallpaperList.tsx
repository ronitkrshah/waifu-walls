import { useState } from "react";
import { FlatList, RefreshControl, StyleSheet } from "react-native";
import { ActivityIndicator, useTheme } from "react-native-paper";
import { Wallpaper } from "~/models";
import WallpaperListItem from "./WallpaperListItem";

type TProps = {
  wallpapers: Wallpaper[];
  onItemPress?(wallpaper: Wallpaper): void;
  onRefresh?(): void;
  onEndReached?(): void;
};

export function WallpaperList({ wallpapers, onItemPress, onRefresh, onEndReached }: TProps) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const theme = useTheme();

  function handleRefresh() {
    try {
      setIsRefreshing(true);
      onRefresh?.();
    } catch (e) {
    } finally {
      setIsRefreshing(false);
    }
  }

  return (
    <FlatList
      data={wallpapers}
      numColumns={2}
      initialNumToRender={30}
      columnWrapperStyle={styles.columnWrapper}
      refreshControl={
        onRefresh ? (
          <RefreshControl
            onRefresh={handleRefresh}
            refreshing={isRefreshing}
            colors={[theme.dark ? theme.colors.inversePrimary : theme.colors.primary]}
          />
        ) : undefined
      }
      onEndReachedThreshold={0.1}
      onEndReached={onEndReached}
      ListFooterComponent={onEndReached ? <ActivityIndicator size={"small"} /> : undefined}
      contentContainerStyle={styles.contentContainer}
      renderItem={({ item }) => {
        return <WallpaperListItem wallpaper={item} onPress={onItemPress} />;
      }}
      keyExtractor={(item, index) => `${item.wallpaperId}_${index}`}
    />
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
