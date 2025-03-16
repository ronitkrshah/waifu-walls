import { useTheme } from "react-native-paper";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { FavouriteModule, HomeModules, SearchModules } from "~/modules";

export type TBottomTabNavigationRoutes = {
  HomeTab: undefined;
  SearchTab: undefined;
  FavouritesTab: undefined;
};

const Tabs = createMaterialBottomTabNavigator<TBottomTabNavigationRoutes>();

export function BottomTabNavigator() {
  const theme = useTheme();
  return (
    <Tabs.Navigator
      theme={theme}
      shifting
      sceneAnimationEnabled
      sceneAnimationType="shifting"
    >
      <Tabs.Screen
        name="HomeTab"
        component={HomeModules.HomeTab}
        options={{
          tabBarLabel: "Waifus",
          tabBarIcon: "cube",
        }}
      />
      <Tabs.Screen
        name="SearchTab"
        component={SearchModules.SearchTab}
        options={{
          tabBarLabel: "Filter",
          tabBarIcon: "magnify",
        }}
      />
      <Tabs.Screen
        name="FavouritesTab"
        component={FavouriteModule.FavouritesTab}
        options={{
          tabBarLabel: "Favourites",
          tabBarIcon: "heart",
        }}
      />
    </Tabs.Navigator>
  );
}
