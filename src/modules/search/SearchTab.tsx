import { Fragment, useEffect, useState } from "react";
import { SwipeableTabs } from "./components";
import { AppHeader } from "~/components";
import { Dimensions, StyleSheet, View } from "react-native";
import {
  TWallpaperCategory,
  TWallpaperType,
  WallpaperCategoryNSFW,
  WallpaperCategorySFW,
} from "~/api";
import { Button, MaterialBottomTabScreenProps } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { CompositeScreenProps } from "@react-navigation/native";
import { TBottomTabNavigationRoutes, TStackNavigationRoutes } from "~/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Animated, { FadeIn } from "react-native-reanimated";

type TProps = CompositeScreenProps<
  MaterialBottomTabScreenProps<TBottomTabNavigationRoutes, "SearchTab">,
  NativeStackScreenProps<TStackNavigationRoutes>
>;

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const AnimatedButton = Animated.createAnimatedComponent(Button);

export default function SearchTab({ navigation }: TProps) {
  const [sfwList, setSfwList] = useState<{ title: string; value: string }[]>([]);
  const [nsfwList, setNsfwList] = useState<{ title: string; value: string }[]>([]);

  useEffect(() => {
    const sfw = Object.entries(WallpaperCategorySFW).map(([key, value]) => ({
      title: key,
      value,
    }));
    const nsfw = Object.entries(WallpaperCategoryNSFW).map(([key, value]) => ({
      title: key,
      value,
    }));
    setSfwList(sfw);
    setNsfwList(nsfw);
  }, []);

  return (
    <Fragment>
      <AppHeader title="Search" />
      <SwipeableTabs buttonLabelOne="SFW" buttonLabelTwo="NSFW">
        <ScrollView contentContainerStyle={styles.container}>
          {sfwList.map((item, index) => (
            <AnimatedButton
              entering={FadeIn.delay(index * 50)}
              onPress={() => {
                navigation.push("SearchResultsScreen", {
                  wallpaperType: "sfw",
                  wallpaperCategory: item.value,
                });
              }}
              key={"sfw_" + item.value}
              mode={index % 2 === 0 ? "contained" : "contained-tonal"}
            >
              {item.title}
            </AnimatedButton>
          ))}
        </ScrollView>
        <ScrollView contentContainerStyle={styles.container}>
          {nsfwList.map((item, index) => (
            <AnimatedButton
              entering={FadeIn.delay(index * 50)}
              onPress={() => {
                navigation.push("SearchResultsScreen", {
                  wallpaperType: "nsfw",
                  wallpaperCategory: item.value,
                });
              }}
              key={"nsfw_" + item.value}
              mode={index % 2 === 0 ? "contained" : "contained-tonal"}
            >
              {item.title}
            </AnimatedButton>
          ))}
        </ScrollView>
      </SwipeableTabs>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    paddingHorizontal: 16,
  },
});
