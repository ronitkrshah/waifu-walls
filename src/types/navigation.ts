import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type TStackNavigationParamList = {
  Splash: undefined;
  Home: NavigatorScreenParams<TTabNavigationParamList>;
};

export type TTabNavigationParamList = {
  Mobile: undefined;
  Desktop: undefined;
};

export type TStackNavigationScreenProps<
  T extends keyof TStackNavigationParamList,
> = NativeStackScreenProps<TStackNavigationParamList, T>;
