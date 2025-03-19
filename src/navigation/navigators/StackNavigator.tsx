import { NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "react-native-paper";
import { OtherModules, WallpaperModule } from "~/modules";
import { BottomTabNavigator, TBottomTabNavigationRoutes } from "./BottomTabNavigator";
import { Wallpaper } from "~/models";

export type TStackNavigationRoutes = {
  SplashScreen: undefined;
  BottomTabNavigator: NavigatorScreenParams<TBottomTabNavigationRoutes>;
  WallpaperPreviewScreen: { wallpaper: Wallpaper };
};

const Stack = createNativeStackNavigator<TStackNavigationRoutes>();

export function StackNavigator() {
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme.colors.surface,
        },
      }}
    >
      <Stack.Screen name="SplashScreen" component={OtherModules.SplashScreen} />
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen
        name="WallpaperPreviewScreen"
        component={WallpaperModule.WallpaperPreviewScreen}
      />
    </Stack.Navigator>
  );
}
