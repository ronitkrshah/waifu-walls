/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {useAppTheme} from '@app/core/theme/MaterialYouTheme';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {Button, MD3Colors} from 'react-native-paper';
import Animated from 'react-native-reanimated';

type Props = {
  label: string;
  onPress(): void;
  animatedStyle: ViewStyle;
};

function AnimatedTabbarButton({label, onPress, animatedStyle}: Props) {
  const {colors} = useAppTheme();
  return (
    <View style={styles.container}>
      <Button onPress={onPress}>{label}</Button>
      <Animated.View
        style={[
          {
            backgroundColor: colors.primary,
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
    alignItems: 'center',
    flex: 1,
  },
  activeBar: {
    height: 5,
    borderRadius: 10,
  },
});

export default AnimatedTabbarButton;
