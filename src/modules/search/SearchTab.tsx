import { Fragment, useEffect, useMemo, useState } from "react";
import { AppHeader } from "~/components";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { TWallpaperType, WallpaperCategoryNSFW, WallpaperCategorySFW } from "~/api";
import { Button, MaterialBottomTabScreenProps, useTheme } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { CompositeScreenProps } from "@react-navigation/native";
import { TBottomTabNavigationRoutes, TStackNavigationRoutes } from "~/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

type TProps = CompositeScreenProps<
  MaterialBottomTabScreenProps<TBottomTabNavigationRoutes, "SearchTab">,
  NativeStackScreenProps<TStackNavigationRoutes>
>;

const AButton = Animated.createAnimatedComponent(Button);

export default function SearchTab({ navigation }: TProps) {
  const [activeType, setActiveType] = useState<TWallpaperType>("sfw");
  const [categories, setCategories] = useState<Array<{ title: string; value: string }>>([]);
  const theme = useTheme();

  useEffect(() => {
    const t = setTimeout(() => {
      const data = Object.entries(
        activeType === "sfw" ? WallpaperCategorySFW : WallpaperCategoryNSFW,
      ).map(([key, value]) => ({
        title: key,
        value,
      }));

      setCategories(data);
    }, 150);

    return () => clearTimeout(t);
  }, [activeType]);

  function handleCategoryPress(category: (typeof categories)[number]) {
    return function () {
      navigation.push("SearchResultsScreen", {
        wallpaperType: activeType,
        wallpaperCategory: category.value,
      });
    };
  }

  return (
    <Fragment>
      <AppHeader title="Search" />
      <View style={[styles.typeContainer, { backgroundColor: theme.colors.elevation.level2 }]}>
        <Button
          mode={activeType === "sfw" ? "contained" : "contained-tonal"}
          onPress={() => setActiveType("sfw")}
        >
          SFW
        </Button>
        <Button
          mode={activeType === "nsfw" ? "contained" : "contained-tonal"}
          onPress={() => setActiveType("nsfw")}
        >
          NSFW
        </Button>
      </View>

      <ScrollView contentContainerStyle={styles.categoriesButtonContainer}>
        {categories.map((item, index) => (
          <AButton
            entering={FadeIn.delay(index * 100)}
            onPress={handleCategoryPress(item)}
            key={activeType + item.value}
            mode={index % 2 === 0 ? "contained" : "contained-tonal"}
          >
            {item.title}
          </AButton>
        ))}
      </ScrollView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  typeContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
  },
  categoriesButtonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
});
