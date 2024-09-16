/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {IWallpaper} from '@core/interfaces';
import {
  CompositeNavigationProp,
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {
  MaterialBottomTabNavigationProp,
  MaterialBottomTabScreenProps,
} from 'react-native-paper';

/**
 * Enum for Search Results Query Type
 *
 * `QUERY` A Single text search query. Ex : Waifu name
 * `TAGS` A list of tags from `SFW` or `NSFW`
 */
export const enum SearchScreenSearchType {
  QUERY = 'query',
  TAGS = 'tags',
}

export const enum StackNavigationRoutes {
  SPLASH_SCREEN = 'SplashScreen',
  HOME_SCREEN = 'HomeScreen',
  REGISTER_AND_LOGIN_SCREEN = 'RegisterAndLoginScreen',
  SEARCH_SCREEN = 'SearchScreen',
  SEARCH_RESULTS_SCREEN = 'SearchResultsScreen',
  SETTINGS_SCREEN = 'SettingsScreen',
  SETUP_WIZARD_SCREEN = 'SetupScreen',
  UPLOAD_WALLPAPER_SCREEN = 'UploadWallpaper',
  WALLPAPER_PREVIEW_SCREEN = 'WallpaperPreviewScreen',
  ADMIN_CONTROLS_SCREEN = 'AdminControlsScreen',
}

/**
 * Bottom Tab (Material) Navigation Routes enum
 *
 * Inside in `StackNavigation`
 */
export const enum BottomTabNavigationRoutes {
  WAIFUS = 'WaifusTab',
  FLAVOURS = 'FlavoursTab',
  SEARCH = 'SearchTab',
  FVAOURITES = 'FavouritesTab',
  ACCOUNT = 'AccountTab',
}

export type BottomTabNavigationParamList = {
  [BottomTabNavigationRoutes.WAIFUS]: undefined;
  [BottomTabNavigationRoutes.FLAVOURS]: undefined;
  [BottomTabNavigationRoutes.SEARCH]: undefined;
  [BottomTabNavigationRoutes.FVAOURITES]: undefined;
  [BottomTabNavigationRoutes.ACCOUNT]: undefined;
};

/**
 * Actual Stack Navigation Routes
 */
export type StackNavigationParamList = {
  [StackNavigationRoutes.SPLASH_SCREEN]: undefined;
  [StackNavigationRoutes.HOME_SCREEN]: NavigatorScreenParams<BottomTabNavigationParamList>;
  [StackNavigationRoutes.REGISTER_AND_LOGIN_SCREEN]: undefined;
  [StackNavigationRoutes.SEARCH_SCREEN]: undefined;
  [StackNavigationRoutes.SEARCH_RESULTS_SCREEN]: {
    type: SearchScreenSearchType;
    query: string | string[];
  };
  [StackNavigationRoutes.SETTINGS_SCREEN]: undefined;
  [StackNavigationRoutes.SETUP_WIZARD_SCREEN]: undefined;
  [StackNavigationRoutes.UPLOAD_WALLPAPER_SCREEN]: undefined;
  [StackNavigationRoutes.WALLPAPER_PREVIEW_SCREEN]: {
    wallpaper: IWallpaper;
  };
  [StackNavigationRoutes.ADMIN_CONTROLS_SCREEN]: undefined;
};

/**
 * Component Props to access `navigation` and `route` in Stack Navigation
 *
 * Example:
 * ```
 * function SplashScreen(
 *    {navigation, route}: StackNavigationScreenProps<StackNavigationRoutes.SPLASH_SCREEN>
 *  ) {}
 * ```
 */
export type StackNavigationScreenProps<T extends StackNavigationRoutes> =
  NativeStackScreenProps<StackNavigationParamList, T>;

/**
 * Component Props to access `navigation` and `route` in Bottom Tab Navigation
 *
 * Example:
 * ```
 * function WaifusTab(
 *    {navigation, route}: BottomTabNavigationScreenProps<BottomTabNavigationRoutes.WAIFUS>
 *  ) {}
 * ```
 */
export type BottomTabNavigationScreenProps<
  T extends BottomTabNavigationRoutes,
> = CompositeScreenProps<
  MaterialBottomTabScreenProps<BottomTabNavigationParamList, T>,
  NativeStackScreenProps<StackNavigationParamList>
>;

/**
 * Type for `useNavigation` hook inside StackNavigation
 */
export type StackNavigationProp =
  NativeStackNavigationProp<StackNavigationParamList>;

/**
 * Type for `useNavigation` hook inside BottomTabNavigation
 *
 * Example:
 * ```
 * const navigation = useNavigation<BottomTabNavigationProp<BottomTabNavigationRoutes.WAIFUS>>()
 * ```
 */
export type BottomTabNavigationProp<T extends BottomTabNavigationRoutes> =
  CompositeNavigationProp<
    MaterialBottomTabNavigationProp<BottomTabNavigationParamList, T>,
    NativeStackNavigationProp<StackNavigationParamList>
  >;
