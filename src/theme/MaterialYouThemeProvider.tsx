import { Material3Scheme, Material3Theme, useMaterial3Theme } from "@pchmn/expo-material3-theme";
import { createContext, useContext } from "react";
import { useColorScheme } from "react-native";
import {
  MD3DarkTheme,
  MD3LightTheme,
  MD3Theme,
  Provider as PaperProvider,
  ProviderProps,
  useTheme,
} from "react-native-paper";

type Material3ThemeProviderProps = {
  theme: Material3Theme;
  updateTheme: (sourceColor: string) => void;
  resetTheme: () => void;
};

const MaterialYouThemeProviderContext = createContext<Material3ThemeProviderProps>(
  {} as Material3ThemeProviderProps,
);

export function MaterialYouThemeProvider({
  children,
  sourceColor,
  fallbackSourceColor,
  ...otherProps
}: ProviderProps & { sourceColor?: string; fallbackSourceColor?: string }) {
  const colorScheme = useColorScheme();

  const { theme, updateTheme, resetTheme } = useMaterial3Theme({
    sourceColor,
    fallbackSourceColor,
  });

  const paperTheme =
    colorScheme === "dark"
      ? { ...MD3DarkTheme, colors: theme.dark }
      : { ...MD3LightTheme, colors: theme.light };

  return (
    <MaterialYouThemeProviderContext.Provider value={{ theme, updateTheme, resetTheme }}>
      <PaperProvider theme={paperTheme} {...otherProps}>
        {children}
      </PaperProvider>
    </MaterialYouThemeProviderContext.Provider>
  );
}

export function useMaterialYouThemeContext() {
  const ctx = useContext(MaterialYouThemeProviderContext);
  if (!ctx) {
    throw new Error("useMaterialYouThemeContext must be used inside Material3ThemeProvider");
  }
  return ctx;
}

export const useAppTheme = useTheme<MD3Theme & { colors: Material3Scheme }>;
