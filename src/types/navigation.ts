import {NavigatorScreenParams} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type TStackNavigationParamList = {
  Splash: undefined;
  Login: undefined;
  Signup: undefined;
  Search: undefined;
  UploadImage: undefined;
  Home: NavigatorScreenParams<TTabNavigationParamList>;
};

export type TTabNavigationParamList = {
  Mobile: undefined;
  Desktop: undefined;
};

export type TStackNavigationScreenProps<
  T extends keyof TStackNavigationParamList,
> = NativeStackScreenProps<TStackNavigationParamList, T>;

export type TUseNavigation =
  NativeStackNavigationProp<TStackNavigationParamList>;
