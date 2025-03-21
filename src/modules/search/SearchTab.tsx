import { Fragment } from "react";
import { SwipeableTabs } from "./components";
import { AppHeader } from "~/components";
import { Dimensions, StyleSheet, View } from "react-native";
import {
  TWallpaperCategory,
  TWallpaperType,
  WallpaperCategoryNSFW,
  WallpaperCategorySFW,
} from "~/api";
import { Button, MaterialBottomTabScreenProps, Text } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { CompositeScreenProps } from "@react-navigation/native";
import { TBottomTabNavigationRoutes, TStackNavigationRoutes } from "~/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type TProps = CompositeScreenProps<
  MaterialBottomTabScreenProps<TBottomTabNavigationRoutes, "SearchTab">,
  NativeStackScreenProps<TStackNavigationRoutes>
>;

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function SearchTab({ navigation }: TProps) {
  async function handlePress(type: TWallpaperType, category: TWallpaperCategory) {
    navigation.push("SearchResultsScreen", { wallpaperType: type, wallpaperCategory: category });
  }

  return (
    <Fragment>
      <AppHeader title="Search" />
      <SwipeableTabs buttonLabelOne="SFW" buttonLabelTwo="NSFW">
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.buttonContainer}>
            {Object.entries(WallpaperCategorySFW).map(([title, value], index) => (
              <Button
                onPress={() => {
                  handlePress("sfw", value);
                }}
                key={value}
                mode={index % 2 === 0 ? "contained" : "contained-tonal"}
              >
                {title}
              </Button>
            ))}
          </ScrollView>
        </View>
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            {Object.entries(WallpaperCategoryNSFW).map(([title, value], index) => (
              <Button
                onPress={() => {
                  handlePress("nsfw", value);
                }}
                key={value}
                mode={index % 2 === 0 ? "contained" : "contained-tonal"}
              >
                {title}
              </Button>
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
