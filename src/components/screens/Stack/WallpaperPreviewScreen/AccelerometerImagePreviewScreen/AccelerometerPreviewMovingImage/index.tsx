/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {WallpaperResponseData} from '@app/types/api/wallpaper';
import {DefaultStyles} from '@app/utils/constants/style';
import {Fragment, useEffect} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
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

type Props = {
  wallpaper: WallpaperResponseData;
};

const {width: SCREEN_WIDTH} = Dimensions.get('screen');

setUpdateIntervalForType(SensorTypes.accelerometer, 50);

const AImage = Animated.createAnimatedComponent(FastImage);

function AccelerometerPreviewMovingImage({wallpaper}: Props) {
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
      <Animated.View style={[styles.container, rFloatingImageStyle]}>
        <AImage
          entering={FadeIn.duration(800)}
          source={{uri: wallpaper.preview_url}}
          style={[StyleSheet.absoluteFillObject]}
        />
      </Animated.View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH * 0.7,
    height: SCREEN_WIDTH * 1.2,
    borderRadius: DefaultStyles.SPACING * 2,
    elevation: 2,
    overflow: 'hidden',
  },
});

export default AccelerometerPreviewMovingImage;
