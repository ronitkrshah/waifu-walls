import { NavigationContainer } from "@react-navigation/native";
import * as SystemUI from "expo-system-ui";
import { MD3Theme, withTheme } from "react-native-paper";
import { StackNavigator } from "./navigators";
import { StatusBar } from "react-native";

type TProps = {
  theme: MD3Theme;
};

function RootNavigation({ theme }: TProps) {
  SystemUI.setBackgroundColorAsync(theme.colors.surface);

  StatusBar.setBackgroundColor(theme.colors.surface);
  StatusBar.setBarStyle(theme.dark ? "light-content" : "dark-content");

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default withTheme(RootNavigation);
