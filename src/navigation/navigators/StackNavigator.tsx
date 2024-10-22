/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  AdminControlsScreen,
  RegisterAndLoginScreen,
  SearchResultsScreen,
  SettingsScreen,
  SetupWizardScreen,
  SplashScreen,
  UploadWallpaperScreen,
  WallpaperPreviewScreen,
} from '@app/screens/Stack';
import {
  StackNavigationParamList,
  StackNavigationRoutes,
} from '@app/navigation/types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MD3Theme, withTheme} from 'react-native-paper';
import BottomTabNavigator from './BottomTabNavigator';
import {useGlobalStore} from '@core/store';

type Props = {
  theme: MD3Theme;
};

const Stack = createNativeStackNavigator<StackNavigationParamList>();

function StackNavigator({theme}: Props) {
  const isCustomPreviewScreenEnabled = useGlobalStore(
    state => state.appSettings.useCustomizePreviewScreen,
  );

  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: theme.colors.surface},
      }}>
      <Stack.Screen
        name={StackNavigationRoutes.SPLASH_SCREEN}
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={StackNavigationRoutes.SETUP_WIZARD_SCREEN}
        component={SetupWizardScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={StackNavigationRoutes.HOME_SCREEN}
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={StackNavigationRoutes.REGISTER_AND_LOGIN_SCREEN}
        component={RegisterAndLoginScreen}
        options={{
          headerShown: true,
          header: RegisterAndLoginScreen.Appbar,
        }}
      />
      <Stack.Screen
        name={StackNavigationRoutes.SEARCH_RESULTS_SCREEN}
        component={SearchResultsScreen}
        options={{
          headerShown: true,
          header: SearchResultsScreen.Appbar,
        }}
      />
      <Stack.Screen
        name={StackNavigationRoutes.SETTINGS_SCREEN}
        component={SettingsScreen}
        options={{
          headerShown: true,
          header: SettingsScreen.Appbar,
        }}
      />
      <Stack.Screen
        name={StackNavigationRoutes.UPLOAD_WALLPAPER_SCREEN}
        component={UploadWallpaperScreen}
        options={{
          headerShown: true,
          header: UploadWallpaperScreen.Appbar,
        }}
      />
      <Stack.Screen
        name={StackNavigationRoutes.WALLPAPER_PREVIEW_SCREEN}
        component={WallpaperPreviewScreen}
        options={{
          navigationBarHidden: isCustomPreviewScreenEnabled,
          headerShown: false,
          animation: 'fade',
        }}
      />
      <Stack.Screen
        name={StackNavigationRoutes.ADMIN_CONTROLS_SCREEN}
        component={AdminControlsScreen}
        options={{
          headerShown: true,
          header: AdminControlsScreen.Appbar,
        }}
      />
    </Stack.Navigator>
  );
}

export default withTheme(StackNavigator);
