/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {AppStyles, AppSizes} from '@core/constants';
import {Pressable, View, StyleSheet} from 'react-native';
import useCustomTheme from './useCustomTheme';
import MaterialCommuntiyIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';

const AIcon = Animated.createAnimatedComponent(MaterialCommuntiyIcons);

function CustomTheme() {
  const {updateTheme, currentTheme} = useCustomTheme();

  return (
    <View style={styles.colorContainer}>
      {AppStyles.CustomThemeColors.map(color => (
        <Color
          key={color}
          color={color}
          onPress={updateTheme}
          isActive={color === currentTheme}
        />
      ))}
    </View>
  );
}

/** Color */
type ColorProps = {
  color: string;
  onPress(color: string): void;
  isActive: boolean;
};

function Color({color, onPress, isActive}: ColorProps) {
  return (
    <Pressable
      style={[styles.color, {backgroundColor: color}]}
      onPress={() => onPress(color)}>
      {isActive && (
        <AIcon name="check" size={50} entering={FadeIn} exiting={FadeOut} />
      )}
    </Pressable>
  );
}

/** Styles */
const styles = StyleSheet.create({
  colorContainer: {
    flexDirection: 'row',
    paddingHorizontal: AppSizes.spacing,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  color: {
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomTheme;
