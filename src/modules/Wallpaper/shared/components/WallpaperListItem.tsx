/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {WallpaperModule} from '@app/modules/';
import {DefaultStyles} from '@app/utils/constants/style';
import {memo, useState} from 'react';
import {Dimensions, Pressable, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import SkeletonLoader from './SkeletonLoader';

type Props = {
  wallpaper: WallpaperModule.WallpaperList.IWallpaper;
  onPress(wallpaper: WallpaperModule.WallpaperList.IWallpaper): void;
};

const {width: SCREEN_WIDTH} = Dimensions.get('screen');

function WallpaperListItem({onPress, wallpaper}: Props) {
  const [isLoading, setIsLoading] = useState(false);

  function handleLoadStart() {
    setIsLoading(true);
  }
  function handleLoadEnd() {
    setIsLoading(false);
  }

  return (
    <Pressable style={styles.container} onPress={() => onPress(wallpaper)}>
      <FastImage
        style={[StyleSheet.absoluteFill]}
        source={{
          uri: wallpaper.preview_url,
        }}
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
        resizeMode={FastImage.resizeMode.cover}
      />

      {/** Skeleton Loader */}
      <SkeletonLoader isAnimating={isLoading} />
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

export default memo(WallpaperListItem);
