import {Material3Scheme, useMaterial3Theme} from '@pchmn/expo-material3-theme';
import {PropsWithChildren, useMemo} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {
  MD3DarkTheme,
  MD3LightTheme,
  MD3Theme,
  Provider as PaperProvider,
  useTheme,
} from 'react-native-paper';
import {MaterialYouThemeProviderContext} from './context';

type Props = {
  sourceColor?: string;
  fallbackSourceColor?: string;
} & PropsWithChildren;

function MaterialYouThemeProvider({
  children,
  sourceColor,
  fallbackSourceColor,
}: Props) {
  const colorScheme = useColorScheme();
  const {theme, resetTheme, updateTheme} = useMaterial3Theme({
    sourceColor,
    fallbackSourceColor,
  });

  const paperTheme = useMemo(
    () =>
      colorScheme === 'dark'
        ? {...MD3DarkTheme, colors: theme.dark}
        : {...MD3LightTheme, colors: theme.light},
    [colorScheme, theme],
  );

  return (
    <MaterialYouThemeProviderContext.Provider
      value={{theme, resetTheme, updateTheme}}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={paperTheme.dark ? 'light-content' : 'dark-content'}
      />
      <PaperProvider theme={paperTheme}>{children}</PaperProvider>
    </MaterialYouThemeProviderContext.Provider>
  );
}

export const useAppTheme = useTheme<MD3Theme & {colors: Material3Scheme}>;
export default MaterialYouThemeProvider;
