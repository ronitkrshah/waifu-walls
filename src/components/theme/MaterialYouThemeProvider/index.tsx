import {useMaterial3Theme} from '@pchmn/expo-material3-theme';
import {PropsWithChildren, useMemo} from 'react';
import {useColorScheme} from 'react-native';
import {
  MD3DarkTheme,
  MD3LightTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

function MaterialYouThemeProvider({children}: PropsWithChildren) {
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
