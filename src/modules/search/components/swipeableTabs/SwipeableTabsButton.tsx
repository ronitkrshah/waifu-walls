import { StyleSheet, View, ViewStyle } from "react-native";
import { Button, useTheme } from "react-native-paper";
import Animated from "react-native-reanimated";

type Props = {
  label: string;
  onPress(): void;
  animatedStyle: ViewStyle;
};

function SwipeableTabsButton({ label, onPress, animatedStyle }: Props) {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Button onPress={onPress}>{label}</Button>
      <Animated.View
        style={[
          {
            backgroundColor: theme.colors.primary,
          },
          styles.activeBar,
          animatedStyle,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
  activeBar: {
    height: 5,
    borderRadius: 10,
  },
});

export default SwipeableTabsButton;
