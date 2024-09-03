/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {StackNavigator} from './navigators';
import {StatusBar, useColorScheme} from 'react-native';

function AppNavigation() {
  const isDarkMode = useColorScheme() === 'dark';

  // Update Statusbar Colors
  StatusBar.setBackgroundColor('transparent');
  StatusBar.setTranslucent(true);
  StatusBar.setBarStyle(isDarkMode ? 'light-content' : 'dark-content');

  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default AppNavigation;
