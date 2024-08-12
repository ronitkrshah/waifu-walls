/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Wallpaper} from '@app/types/api/wallpaper';
import useLikeWallpaperController from '../controllers/useLikeWallaperController';
import {PropsWithChildren, memo, useEffect} from 'react';
import Animated, {
  ZoomIn,
  ZoomOut,
  cancelAnimation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {StyleSheet} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import MaterialCommuntiyIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {IconButton, MD3Colors} from 'react-native-paper';
import {DefaultStyles} from '@app/utils/constants/style';
import {useAppTheme} from '@app/theme/MaterialYouTheme';

type Props = {
  wallpaper: Wallpaper;
  animatedIconSize?: number;
  floatingIconSize?: number;
} & Required<PropsWithChildren>;

const AMaterialIcons = Animated.createAnimatedComponent(MaterialCommuntiyIcons);
const AIconButton = Animated.createAnimatedComponent(IconButton);

/**
 * This Component is a wrapper of Like Animated Button which will activate
 * on double tab of the children
 */
function LikeWallpaperButton({
  wallpaper,
  children,
  animatedIconSize,
  floatingIconSize,
}: Props) {
  const animatedValue = useSharedValue(0);
  const {handleLikeButtonPress, isLiked} = useLikeWallpaperController({
    wallpaper,
  });
  const {colors} = useAppTheme();

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      animatedValue.value = withSpring(1);
    })
    .onEnd(() => {
      handleLikeButtonPress();
      setTimeout(() => {
        animatedValue.value = withSpring(0);
      }, 1500);
    })
    .runOnJS(true);

  /** Animated Icon Style */
  const rHeartStyle = useAnimatedStyle(() => ({
    opacity: interpolate(animatedValue.value, [0, 1], [0, 1]),
    fontSize: interpolate(
      animatedValue.value,
      [0, 1],
      [0, animatedIconSize ?? 100],
    ),
  }));

  useEffect(() => {
    return () => {
      cancelAnimation(animatedValue);
    };
  }, [animatedValue]);

  return (
    <GestureDetector gesture={doubleTap}>
      <Animated.View style={styles.container}>
        {children}

        {/** Button For Center Animated Like Icon */}
        <Animated.View style={[styles.likeButtonContainer]}>
          <AMaterialIcons
            name={isLiked ? 'heart' : 'heart-broken'}
            color={isLiked ? MD3Colors.error50 : MD3Colors.error100}
            style={[rHeartStyle]}
          />
        </Animated.View>

        {/** Floating Button that indicates if the icon is already liked */}
        {isLiked && (
          <Animated.View style={styles.floatingButtonContainer}>
            <AIconButton
              icon={'heart'}
              size={floatingIconSize ?? 40}
              iconColor={MD3Colors.error70}
              containerColor={colors.secondaryContainer}
              entering={ZoomIn}
              exiting={ZoomOut}
              onPress={handleLikeButtonPress}
            />
          </Animated.View>
        )}
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  likeButtonContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingButtonContainer: {
    position: 'absolute',
    bottom: DefaultStyles.SPACING,
    right: DefaultStyles.SPACING * 2,
  },
});

export default memo(LikeWallpaperButton);
