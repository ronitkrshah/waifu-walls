/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {LatestWallpaperDTO} from '@app/features/latestWallpaperList/dto';
import {DefaultStyles} from '@app/utils/constants/style';
import {Dimensions, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, {FadeIn} from 'react-native-reanimated';

type Props = {
  wallpaper: LatestWallpaperDTO;
};

const {width: SCREEN_WIDTH} = Dimensions.get('screen');

const AImage = Animated.createAnimatedComponent(FastImage);

function WallpaperPreviewFloatingImage({wallpaper}: Props) {
  return (
    <View style={styles.container}>
      <AImage
        entering={FadeIn.duration(800)}
        source={{uri: wallpaper.preview_url}}
        style={[StyleSheet.absoluteFillObject, styles.image]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH * 0.7,
    height: SCREEN_WIDTH * 1.2,
  },
  image: {
    borderRadius: DefaultStyles.SPACING * 2,
  },
});

export default WallpaperPreviewFloatingImage;
