/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Material3Scheme, useMaterial3Theme} from '@pchmn/expo-material3-theme';
import {PropsWithChildren, useMemo} from 'react';
import {useColorScheme} from 'react-native';
import {
  MD3DarkTheme,
  MD3LightTheme,
  MD3Theme,
  PaperProvider,
  useTheme,
} from 'react-native-paper';

function MaterialYouThemeProvider({children}: Required<PropsWithChildren>) {
  const colorScheme = useColorScheme();
  const {theme} = useMaterial3Theme();

  const paperTheme = useMemo(
    () =>
      colorScheme === 'dark'
        ? {...MD3DarkTheme, colors: theme.dark}
        : {...MD3LightTheme, colors: theme.light},
    [colorScheme, theme],
  );

  return <PaperProvider theme={paperTheme}>{children}</PaperProvider>;
}

export default MaterialYouThemeProvider;
export const useAppTheme = useTheme<MD3Theme & {colors: Material3Scheme}>;
