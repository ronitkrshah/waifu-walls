import {RouteProp} from '@react-navigation/native';
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
  FullScreenImage: {previewUrl: string; downloadUrl: string; imageId: string};
  Home: undefined;
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
