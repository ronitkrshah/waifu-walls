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

  async function handlePress(type: TWallpaperType, category: TWallpaperCategory) {
    navigation.push("SearchResultsScreen", { wallpaperType: type, wallpaperCategory: category });
  }

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
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.buttonContainer}>
            {sfwList.map((item, index) => (
              <AnimatedButton
                entering={FadeIn.delay(index * 50)}
                onPress={() => {
                  handlePress("sfw", item.value);
                }}
                key={item.value}
                mode={index % 2 === 0 ? "contained" : "contained-tonal"}
              >
                {item.title}
              </AnimatedButton>
            ))}
          </ScrollView>
        </View>
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            {nsfwList.map((item, index) => (
              <AnimatedButton
                entering={FadeIn.delay(index * 50)}
                onPress={() => {
                  handlePress("nsfw", item.value);
                }}
                key={item.value}
                mode={index % 2 === 0 ? "contained" : "contained-tonal"}
              >
                {item.title}
              </AnimatedButton>
            ))}
          </View>
        </View>
      </SwipeableTabs>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    paddingHorizontal: 16,
  },
});
