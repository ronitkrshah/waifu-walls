import { NavigationProp } from "@react-navigation/native";
import { Appbar } from "react-native-paper";

type TProps = {
  navigation?: NavigationProp<any>;
  headerMode?: "small" | "large";
  title: string;
};

export function AppHeader({ navigation, title, headerMode = "large" }: TProps) {
  return (
    <Appbar.Header mode={headerMode}>
      {navigation?.canGoBack && (
        <Appbar.BackAction onPress={navigation.goBack} />
      )}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
}
