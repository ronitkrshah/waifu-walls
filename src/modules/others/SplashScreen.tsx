import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";
import Animated, {
  cancelAnimation,
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { DefaultStyles } from "~/constants";
import { TStackNavigationRoutes } from "~/navigation";
import * as Linking from "expo-linking";
import { WallpaperService } from "~/services";
import { TWallpaperType } from "~/api";

type TProps = NativeStackScreenProps<TStackNavigationRoutes, "SplashScreen">;

export default function SplashScreen({ navigation }: TProps) {
  const circle = useSharedValue(0);
  const { colors } = useTheme();

  const rCircleStyle = useAnimatedStyle(() => ({
    borderWidth: interpolate(circle.value, [0, 1], [0, 8], Extrapolation.CLAMP),
  }));

  async function handleDeepLinking() {
    const url = await Linking.getInitialURL();
    if (!url) {
      navigation.replace("BottomTabNavigator", { screen: "HomeTab" });
      return;
    }
    const { queryParams } = Linking.parse(url);
    if (!queryParams) {
      navigation.replace("BottomTabNavigator", { screen: "HomeTab" });
      return;
    }
    const { id, type, category, imageType } = queryParams;
    if (!id || !type || !category || !imageType) {
      navigation.replace("BottomTabNavigator", { screen: "HomeTab" });
      return;
    }

    navigation.replace("WallpaperPreviewScreen", {
      wallpaper: WallpaperService.getWallpaperWithId(
        id as string,
        type as TWallpaperType,
        category,
        imageType as string,
      ),
    });
  }

  useEffect(() => {
    const t = setTimeout(() => {
      handleDeepLinking();
    }, 500);
    circle.value = withRepeat(withTiming(1, { duration: 600 }), Infinity, true);
    return () => {
      cancelAnimation(circle);
      clearTimeout(t);
    };
  }, [circle]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.circle, rCircleStyle, { borderColor: colors.primary }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...DefaultStyles.flexCenter,
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});
