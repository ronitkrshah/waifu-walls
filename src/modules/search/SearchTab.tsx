import { Fragment, useMemo, useState } from "react";
import { AppHeader } from "~/components";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { TWallpaperType, WallpaperCategoryNSFW, WallpaperCategorySFW } from "~/api";
import { Button, MaterialBottomTabScreenProps, useTheme } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { CompositeScreenProps } from "@react-navigation/native";
import { TBottomTabNavigationRoutes, TStackNavigationRoutes } from "~/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Animated, { FadeIn, useAnimatedStyle, withTiming } from "react-native-reanimated";

type TProps = CompositeScreenProps<
  MaterialBottomTabScreenProps<TBottomTabNavigationRoutes, "SearchTab">,
  NativeStackScreenProps<TStackNavigationRoutes>
>;

const AnimatedButton = Animated.createAnimatedComponent(Button);

export default function SearchTab({ navigation }: TProps) {
  const [activeType, setActiveType] = useState<TWallpaperType>("sfw");
  const theme = useTheme();

  const ActiveKeys = useMemo(() => {
    return Object.entries(activeType === "sfw" ? WallpaperCategorySFW : WallpaperCategoryNSFW).map(
      ([key, value]) => ({
        title: key,
        value,
      }),
    );
  }, [activeType]);

  const rSfwBtnStyle = useAnimatedStyle(() => ({
    backgroundColor: withTiming(
      activeType === "sfw" ? theme.colors.primary : theme.colors.secondaryContainer,
    ),
  }));

  const rSfwBtnTextStyle = useAnimatedStyle(() => ({
    color: withTiming(
      activeType === "sfw" ? theme.colors.onPrimary : theme.colors.onSecondaryContainer,
    ),
  }));

  const rNsfwBtnStyle = useAnimatedStyle(() => ({
    backgroundColor: withTiming(
      activeType === "nsfw" ? theme.colors.primary : theme.colors.secondaryContainer,
    ),
  }));

  const rNsfwBtnTextStyle = useAnimatedStyle(() => ({
    color: withTiming(
      activeType === "nsfw" ? theme.colors.onPrimary : theme.colors.onSecondaryContainer,
    ),
  }));

  return (
    <Fragment>
      <AppHeader title="Search" />
      <ScrollView contentContainerStyle={styles.contentContainer} stickyHeaderIndices={[0]}>
        <View style={[styles.stickyHeader, { backgroundColor: theme.colors.surfaceDisabled }]}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => setActiveType("sfw")}>
              <Animated.View style={[styles.button, rSfwBtnStyle]}>
                <Animated.Text style={[rSfwBtnTextStyle, styles.buttonText]}>
                  {" SFW "}
                </Animated.Text>
              </Animated.View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveType("nsfw")}>
              <Animated.View style={[styles.button, rNsfwBtnStyle]}>
                <Animated.Text style={[rNsfwBtnTextStyle, styles.buttonText]}>
                  {" NSFW "}
                </Animated.Text>
              </Animated.View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.categoriesButtonContainer}>
          {ActiveKeys.map((item, index) => (
            <AnimatedButton
              entering={FadeIn.delay(index * 50)}
              onPress={() => {
                navigation.push("SearchResultsScreen", {
                  wallpaperType: activeType,
                  wallpaperCategory: item.value,
                });
              }}
              key={activeType + item.value}
              mode={index % 2 === 0 ? "contained" : "contained-tonal"}
            >
              {item.title}
            </AnimatedButton>
          ))}
        </View>
      </ScrollView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 16,
  },
  stickyHeader: {
    marginBottom: 16,
    paddingVertical: 16,
    borderRadius: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "red",
  },
  buttonText: {
    fontWeight: "600",
    fontSize: 16,
  },
  categoriesButtonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    paddingHorizontal: 16,
  },
});
