/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {memo} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  ReduceMotion,
  cancelAnimation,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

type Props = {
  isAnimating: boolean;
};

function SkeletonLoader({isAnimating}: Props) {
  const opacity = useSharedValue(0);

  // Animation configuration
  opacity.value = withRepeat(
    withTiming(1, {duration: 1000}),
    -1,
    true,
    () => {},
    ReduceMotion.System,
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        opacity.value,
        [0, 1],
        ['hsla(360, 100%, 100%, 0.2)', 'hsla(0, 0%, 0%, 0.2)'],
      ),
    };
  });

  if (!isAnimating) {
    cancelAnimation(opacity);
  }

  return isAnimating ? (
    <Animated.View style={[styles.skeleton, animatedStyle]} />
  ) : null;
}

const styles = StyleSheet.create({
  skeleton: {
    flex: 1,
  },
});

export default memo(SkeletonLoader);
