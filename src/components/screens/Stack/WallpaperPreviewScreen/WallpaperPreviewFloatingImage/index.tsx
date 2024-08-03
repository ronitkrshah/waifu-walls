/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {LatestWallpaperDTO} from '@app/features/latestWallpaperList/dto';
import {DefaultStyles} from '@app/utils/constants/style';
import {useEffect} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, {
  FadeIn,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {
  SensorTypes,
  accelerometer,
  setUpdateIntervalForType,
} from 'react-native-sensors';

type Props = {
  wallpaper: LatestWallpaperDTO;
};

const {width: SCREEN_WIDTH} = Dimensions.get('screen');

setUpdateIntervalForType(SensorTypes.accelerometer, 5);

const AImage = Animated.createAnimatedComponent(FastImage);

function WallpaperPreviewFloatingImage({wallpaper}: Props) {
  const accXValue = useSharedValue(0);
  const accYValue = useSharedValue(0);

  useEffect(() => {
    const subscribe = accelerometer.subscribe(({x, y}) => {
      accXValue.value = Number(x.toFixed(2));
      accYValue.value = Number(y.toFixed(2));
    });
    return () => subscribe.unsubscribe();
  }, [accXValue, accYValue]);

  /** Animated Style Based On Accelerometer */
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {perspective: SCREEN_WIDTH},
      {rotateY: `${interpolate(accXValue.value, [-8, 8], [15, -15])}deg`},
      {rotateX: `${interpolate(accYValue.value, [-8, 8], [15, -5])}deg`},
    ],
  }));

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <AImage
        entering={FadeIn.duration(800)}
        source={{uri: wallpaper.preview_url}}
        style={[StyleSheet.absoluteFillObject]}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH * 0.7,
    height: SCREEN_WIDTH * 1.2,
    borderRadius: DefaultStyles.SPACING * 2,
    overflow: 'hidden',
  },
});

export default WallpaperPreviewFloatingImage;
