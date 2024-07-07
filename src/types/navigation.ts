import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {IDatabaseWallpaper} from './wallpaper';

export type TStackNavigationParamList = {
  Splash: undefined;
  Login: undefined;
  Signup: undefined;
  Search: undefined;
  SearchResluts: {query: string};
  UploadImage: undefined;
  FullScreenImage: {wallpaper: IDatabaseWallpaper};
  Home: NavigatorScreenParams<TTabNavigationParamList>;
};

export type TTabNavigationParamList = {
  HomeTab: undefined;
  SearchTab: undefined;
  AccountTab: undefined;
};

export type TStackNavigationScreenProps<
  T extends keyof TStackNavigationParamList,
> = NativeStackScreenProps<TStackNavigationParamList, T>;

export type TUseRoute<T extends keyof TStackNavigationParamList> = RouteProp<
  TStackNavigationParamList,
  T
>;

export type TUseNavigation =
  NativeStackNavigationProp<TStackNavigationParamList>;
