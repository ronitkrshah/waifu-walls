import {Material3Theme} from '@pchmn/expo-material3-theme';
import {createContext, useContext} from 'react';

type TMaterialYouThemeProviderProps = {
  theme: Material3Theme;
  updateTheme: (sourceColor: string) => void;
  resetTheme: () => void;
};

export const MaterialYouThemeProviderContext =
  createContext<TMaterialYouThemeProviderProps>(
    {} as TMaterialYouThemeProviderProps,
  );

export function useMaterialYouThemeProvider() {
  const context = useContext(MaterialYouThemeProviderContext);
  if (context) {
    return context;
  }

  throw new Error(
    'useMaterialYouThemeProvider must be withing MaterialYouThemeProviderContext',
  );
}
