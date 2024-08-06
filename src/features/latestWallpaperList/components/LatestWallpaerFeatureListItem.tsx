/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {DefaultStyles} from '@app/utils/constants/style';
import {memo, useState} from 'react';
import {Dimensions, Pressable, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import useLatestWallpaperFeatureController from '../controllers/useLatestWallpaperFeatureController';
import LatestWallpaperSkeletonLoader from './LatestWallpaperSkeletonLoader';
import {WallpaperResponseData} from '@app/types/api/wallpaper';

type Props = {
  wallpaper: WallpaperResponseData;
};

const {width: SCREEN_WIDTH} = Dimensions.get('screen');

function LatestWallpaerFeatureListItem({wallpaper}: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const {handleWallpaperPress} = useLatestWallpaperFeatureController();

  function handleLoadStart() {
    setIsLoading(true);
  }
  function handleLoadEnd() {
    setIsLoading(false);
  }

  return (
    <Pressable
      style={styles.container}
      onPress={() => handleWallpaperPress(wallpaper)}>
      <FastImage
        style={[StyleSheet.absoluteFill]}
        source={{
          uri: wallpaper.preview_url,
        }}
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
        resizeMode={FastImage.resizeMode.cover}
      />
      <LatestWallpaperSkeletonLoader isAnimating={isLoading} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH / 2 - DefaultStyles.SPACING,
    height: SCREEN_WIDTH * 0.85,
    borderRadius: DefaultStyles.SPACING,
    overflow: 'hidden',
  },
});

export default memo(LatestWallpaerFeatureListItem);
