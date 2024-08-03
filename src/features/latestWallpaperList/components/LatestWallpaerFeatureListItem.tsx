/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {DefaultStyles} from '@app/utils/constants/style';
import {memo} from 'react';
import {Dimensions, Pressable, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {LatestWallpaperDTO} from '../dto';
import useLatestWallpaperFeatureController from '../controllers/useLatestWallpaperFeatureController';

type Props = {
  wallpaper: LatestWallpaperDTO;
};

const {width: SCREEN_WIDTH} = Dimensions.get('screen');

function LatestWallpaerFeatureListItem({wallpaper}: Props) {
  const {handleWallpaperPress} = useLatestWallpaperFeatureController();

  return (
    <Pressable
      style={styles.container}
      onPress={() => handleWallpaperPress(wallpaper)}>
      <FastImage
        style={[StyleSheet.absoluteFill, styles.image]}
        source={{
          uri: wallpaper.preview_url,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH / 2 - DefaultStyles.SPACING,
    height: SCREEN_WIDTH * 0.85,
  },
  image: {
    borderRadius: DefaultStyles.SPACING,
  },
});

export default memo(LatestWallpaerFeatureListItem);
