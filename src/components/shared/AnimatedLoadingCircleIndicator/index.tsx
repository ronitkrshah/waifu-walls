/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {useAppTheme} from '@app/theme/MaterialYouTheme';
import {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  Extrapolation,
  cancelAnimation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

function AnimatedLoadingCircleIndicator() {
  const circle = useSharedValue(0);
  const {colors} = useAppTheme();

  circle.value = withRepeat(withTiming(1, {duration: 600}), Infinity, true);

  const rCircleStyle = useAnimatedStyle(() => ({
    borderWidth: interpolate(circle.value, [0, 1], [0, 8], Extrapolation.CLAMP),
  }));

  useEffect(() => {
    return () => {
      cancelAnimation(circle);
    };
  }, [circle]);

  return (
    <Animated.View
      style={[styles.circle, rCircleStyle, {borderColor: colors.primary}]}
    />
  );
}

const styles = StyleSheet.create({
  circle: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});

export default AnimatedLoadingCircleIndicator;
