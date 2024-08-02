/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {MaterialBottomTabNavigationProp} from 'react-native-paper';

export const enum StackNavigationRoutes {
  SPLASH_SCREEN = 'SplashScreen',
  HOME_SCREEN = 'HomeScreen',
  REGISTER_AND_LOGIN_SCREEN = 'RegisterAndLoginScreen',
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
};

export type StackNavigationScreenProps<T extends StackNavigationRoutes> =
  NativeStackScreenProps<StackNavigationParamList, T>;

/** Type for useNavigation hook inside tab bar */
export type BottomTabNavigationProp<T extends BottomTabNavigationRoutes> =
  CompositeNavigationProp<
    MaterialBottomTabNavigationProp<BottomTabNavigationParamList, T>,
    NativeStackNavigationProp<StackNavigationParamList>
  >;
