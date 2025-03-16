import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { DefaultStyles } from "~/constants";
import { TStackNavigationRoutes } from "~/navigation";

type TProps = NativeStackScreenProps<TStackNavigationRoutes, "SplashScreen">;

export default function SplashScreen({ navigation }: TProps) {
  function handleExplorePress() {
    navigation.push("BottomTabNavigator", { screen: "HomeTab" });
  }

  return (
    <SafeAreaView style={DefaultStyles.safeAreaView}>
      <View style={styles.container}>
        <Button mode="contained" onPress={handleExplorePress}>
          Explore
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...DefaultStyles.flexCenter,
    paddingHorizontal: 16,
  },
});
