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
import StackNavigator from './StackNavigator';
import {StatusBar, useColorScheme} from 'react-native';
import {MD3Theme, withTheme} from 'react-native-paper';

type Props = {
  theme: MD3Theme;
};

function AppNavigation({theme: {colors}}: Props) {
  const isDarkMode = useColorScheme() === 'dark';

  // Update Statusbar Colors
  StatusBar.setBackgroundColor(colors.surface);
  StatusBar.setBarStyle(isDarkMode ? 'light-content' : 'dark-content');

  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default withTheme(AppNavigation);
