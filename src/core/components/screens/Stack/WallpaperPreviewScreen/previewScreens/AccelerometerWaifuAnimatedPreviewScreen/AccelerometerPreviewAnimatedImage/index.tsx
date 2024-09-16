/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {AppSizes} from '@core/constants';
import {Fragment, useEffect} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, {
  Extrapolation,
  FadeIn,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {
  SensorTypes,
  accelerometer,
  setUpdateIntervalForType,
} from 'react-native-sensors';
import DoubleTapShowControls from '../DoubleTabShowControls';
import DoubleTapLikeWrapper from '@app/modules/Wallpaper/Like/components/DoubleTapLikeWrapper';
import {IWallpaper} from '@core/interfaces';

type Props = {
  wallpaper: IWallpaper;
};

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('screen');

setUpdateIntervalForType(SensorTypes.accelerometer, 50);

const AImage = Animated.createAnimatedComponent(FastImage);

function AccelerometerPreviewAnimatedImage({wallpaper}: Props) {
  const accXValue = useSharedValue(0);
  const accYValue = useSharedValue(0);

  useEffect(() => {
    const subscribe = accelerometer.subscribe(({x, y}) => {
      accXValue.value = withSpring(Number(x.toFixed(2)));
      accYValue.value = withSpring(Number(y.toFixed(2)));
    });
    return () => subscribe.unsubscribe();
  }, [accXValue, accYValue]);

  /** Animated Style Based On Accelerometer */
  const rFloatingImageStyle = useAnimatedStyle(() => ({
    transform: [
      {perspective: SCREEN_WIDTH},
      {
        rotateY: `${interpolate(
          accXValue.value,
          [-4, 4],
          [5, -5],
          Extrapolation.CLAMP,
        )}deg`,
      },
      {
        rotateX: `${interpolate(
          accYValue.value,
          [-4, 4],
          [5, -5],
          Extrapolation.CLAMP,
        )}deg`,
      },
      {
        translateY: interpolate(
          accYValue.value,
          [-4, 4],
          [20, -20],
          Extrapolation.CLAMP,
        ),
      },
      {
        translateX: interpolate(
          accXValue.value,
          [-4, 4],
          [20, -20],
          Extrapolation.CLAMP,
        ),
      },
    ],
  }));

  const rBackgroundBlurStyle = useAnimatedStyle(() => ({
    transform: [
      {scaleY: interpolate(accYValue.value, [-8, 8], [2, 3])},
      {scaleX: interpolate(accXValue.value, [-8, 8], [2, 3])},
    ],
  }));

  return (
    <Fragment>
      <AImage
        source={{uri: wallpaper.preview_url}}
        style={[StyleSheet.absoluteFillObject, rBackgroundBlurStyle]}
        blurRadius={10}
      />

      <DoubleTapShowControls wallpaper={wallpaper}>
        <View style={styles.rootContainer}>
          <DoubleTapLikeWrapper showFloatingIconOutside wallpaper={wallpaper}>
            <Animated.View style={[styles.container, rFloatingImageStyle]}>
              <AImage
                entering={FadeIn.duration(800)}
                source={{uri: wallpaper.preview_url}}
                style={[StyleSheet.absoluteFillObject]}
              />
            </Animated.View>
          </DoubleTapLikeWrapper>
        </View>
      </DoubleTapShowControls>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: SCREEN_WIDTH * 0.7,
    height: SCREEN_WIDTH * 1.2,
    borderRadius: AppSizes.spacing * 2,
    elevation: 2,
    overflow: 'hidden',
  },
});

export default AccelerometerPreviewAnimatedImage;
