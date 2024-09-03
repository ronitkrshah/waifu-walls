/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Material3ThemeProvider.tsx
import {
  Material3Scheme,
  Material3Theme,
  useMaterial3Theme,
} from '@pchmn/expo-material3-theme';
import {createContext, useContext} from 'react';
import {useColorScheme} from 'react-native';
import {
  MD3DarkTheme,
  MD3LightTheme,
  MD3Theme,
  Provider as PaperProvider,
  ProviderProps,
  useTheme,
} from 'react-native-paper';

type Material3ThemeProviderProps = {
  theme: Material3Theme;
  updateTheme: (sourceColor: string) => void;
  resetTheme: () => void;
};

const Material3ThemeProviderContext =
  createContext<Material3ThemeProviderProps>({} as Material3ThemeProviderProps);

function Material3ThemeProvider({
  children,
  sourceColor,
  fallbackSourceColor,
  ...otherProps
}: ProviderProps & {sourceColor?: string; fallbackSourceColor?: string}) {
  const colorScheme = useColorScheme();

  const {theme, updateTheme, resetTheme} = useMaterial3Theme({
    sourceColor,
    fallbackSourceColor,
  });

  const paperTheme =
    colorScheme === 'dark'
      ? {...MD3DarkTheme, colors: theme.dark}
      : {...MD3LightTheme, colors: theme.light};

  return (
    <Material3ThemeProviderContext.Provider
      value={{theme, updateTheme, resetTheme}}>
      <PaperProvider theme={paperTheme} {...otherProps}>
        {children}
      </PaperProvider>
    </Material3ThemeProviderContext.Provider>
  );
}

export function useMaterial3ThemeContext() {
  const ctx = useContext(Material3ThemeProviderContext);
  if (!ctx) {
    throw new Error(
      'useMaterial3ThemeContext must be used inside Material3ThemeProvider',
    );
  }
  return ctx;
}

export default Material3ThemeProvider;
export const useAppTheme = useTheme<MD3Theme & {colors: Material3Scheme}>;
