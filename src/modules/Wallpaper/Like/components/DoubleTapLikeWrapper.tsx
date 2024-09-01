/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {WallpaperFeature} from '@app/modules';
import {useFavorite} from '../hooks';
import {Fragment, PropsWithChildren, memo, useEffect} from 'react';
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
  wallpaper: WallpaperFeature.WallpaperList.IWallpaper;
  animatedIconSize?: number;
  floatingIconSize?: number;
  showFloatingIconOutside?: boolean;
} & Required<PropsWithChildren>;

const AMaterialIcons = Animated.createAnimatedComponent(MaterialCommuntiyIcons);
const AIconButton = Animated.createAnimatedComponent(IconButton);

function DoubleTapLikeWrapper({
  wallpaper,
  children,
  animatedIconSize,
  showFloatingIconOutside,
}: Props) {
  const animatedValue = useSharedValue(0);
  const {handleLikeButtonPress, isLiked} = useFavorite({
    wallpaper,
  });

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
    <Fragment>
      <GestureDetector gesture={doubleTap}>
        <Animated.View style={styles.container}>
          {children}

          {/** Button For Center Animated Like Icon */}
          <AMaterialIcons
            name={isLiked ? 'heart' : 'heart-broken'}
            color={isLiked ? MD3Colors.error50 : MD3Colors.error100}
            style={[styles.likeButton, rHeartStyle]}
          />

          {/** Floating Button that indicates if the icon is already liked */}
          {isLiked && !showFloatingIconOutside && (
            <FloatingLikeButton onPress={handleLikeButtonPress} />
          )}
        </Animated.View>
      </GestureDetector>

      {/** Floating Button that indicates if the icon is already liked */}
      {isLiked && showFloatingIconOutside && (
        <FloatingLikeButton onPress={handleLikeButtonPress} />
      )}
    </Fragment>
  );
}

/** Floating Button */
type FloatingLikeButtonProps = {
  onPress(): void;
};

function FloatingLikeButton({onPress}: FloatingLikeButtonProps) {
  const {colors} = useAppTheme();

  return (
    <AIconButton
      icon={'heart'}
      size={40}
      iconColor={MD3Colors.error70}
      containerColor={colors.secondaryContainer}
      entering={ZoomIn}
      exiting={ZoomOut}
      onPress={onPress}
      style={styles.floatingButton}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  likeButton: {
    position: 'absolute',
  },
  floatingButton: {
    position: 'absolute',
    right: DefaultStyles.SPACING,
    bottom: DefaultStyles.SPACING,
  },
});

export default memo(DoubleTapLikeWrapper);
