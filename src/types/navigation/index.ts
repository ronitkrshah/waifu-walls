/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
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
import {WallpaperResponseData} from '../api/wallpaper';

export const enum SearchScreenSearchType {
  QUERY = 'query',
  TAGS = 'tags',
}

export const enum StackNavigationRoutes {
  SPLASH_SCREEN = 'SplashScreen',
  HOME_SCREEN = 'HomeScreen',
  REGISTER_AND_LOGIN_SCREEN = 'RegisterAndLoginScreen',
  SEARCH_RESULTS_SCREEN = 'SearchResultsScreen',
  SETTINGS_SCREEN = 'SettingsScreen',
  SETUP_WIZARD_SCREEN = 'SetupScreen',
  UPLOAD_WALLPAPER_SCREEN = 'UploadWallpaper',
  WALLPAPER_PREVIEW_SCREEN = 'WallpaperPreviewScreen',
  ADMIN_CONTROLS_SCREEN = 'AdminControlsScreen',
  PENDING_REQUESTS_SCREEN = 'PendingRequestsScreen',
  PENDING_REQUESTS_PREVIEW_SCREEN = 'PendingRequestsPreviewScreen',
}

export const enum BottomTabNavigationRoutes {
  WAIFUS = 'WaifusTab',
  FLAVOURS = 'FlavoursTab',
  ACCOUNT = 'AccountTab',
}

export type BottomTabNavigationParamList = {
  [BottomTabNavigationRoutes.WAIFUS]: undefined;
  [BottomTabNavigationRoutes.FLAVOURS]: undefined;
  [BottomTabNavigationRoutes.ACCOUNT]: undefined;
};

export type StackNavigationParamList = {
  [StackNavigationRoutes.SPLASH_SCREEN]: undefined;
  [StackNavigationRoutes.HOME_SCREEN]: NavigatorScreenParams<BottomTabNavigationParamList>;
  [StackNavigationRoutes.REGISTER_AND_LOGIN_SCREEN]: undefined;
  [StackNavigationRoutes.SEARCH_RESULTS_SCREEN]: {
    type: SearchScreenSearchType;
    query: string | string[];
  };
  [StackNavigationRoutes.SETTINGS_SCREEN]: undefined;
  [StackNavigationRoutes.SETUP_WIZARD_SCREEN]: undefined;
  [StackNavigationRoutes.UPLOAD_WALLPAPER_SCREEN]: undefined;
  [StackNavigationRoutes.WALLPAPER_PREVIEW_SCREEN]: {
    wallpaper: WallpaperResponseData;
  };
  [StackNavigationRoutes.ADMIN_CONTROLS_SCREEN]: undefined;
  [StackNavigationRoutes.PENDING_REQUESTS_SCREEN]: undefined;
  [StackNavigationRoutes.PENDING_REQUESTS_PREVIEW_SCREEN]: undefined;
};

export type StackNavigationScreenProps<T extends StackNavigationRoutes> =
  NativeStackScreenProps<StackNavigationParamList, T>;

export type BottomTabNavigationScreenProps<
  T extends BottomTabNavigationRoutes,
> = CompositeScreenProps<
  MaterialBottomTabScreenProps<BottomTabNavigationParamList, T>,
  NativeStackScreenProps<StackNavigationParamList>
>;

export type StackNavigationProp =
  NativeStackNavigationProp<StackNavigationParamList>;

/** Type for useNavigation hook inside tab bar */
export type BottomTabNavigationProp<T extends BottomTabNavigationRoutes> =
  CompositeNavigationProp<
    MaterialBottomTabNavigationProp<BottomTabNavigationParamList, T>,
    NativeStackNavigationProp<StackNavigationParamList>
  >;
