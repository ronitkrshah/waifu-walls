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

type TProps = NativeStackScreenProps<TStackNavigationRoutes, "SplashScreen">;

export default function SplashScreen({ navigation }: TProps) {
  const circle = useSharedValue(0);
  const { colors } = useTheme();

  const rCircleStyle = useAnimatedStyle(() => ({
    borderWidth: interpolate(circle.value, [0, 1], [0, 8], Extrapolation.CLAMP),
  }));

  useEffect(() => {
    circle.value = withRepeat(withTiming(1, { duration: 600 }), Infinity, true);
    const timeout = setTimeout(() => {
      navigation.replace("BottomTabNavigator", { screen: "HomeTab" });
    }, 1500);
    return () => {
      cancelAnimation(circle);
      clearTimeout(timeout);
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
