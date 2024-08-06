/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {WallpaperResponseData} from '@app/types/api/wallpaper';
import {DefaultStyles} from '@app/utils/constants/style';
import {useState} from 'react';
import {Dimensions, Pressable, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import WallpaperItemSkeletonLoader from './WallpaperItemSkeletonLoader';

type Props = {
  wallpaper: WallpaperResponseData;
  onPress(wallpaper: WallpaperResponseData): void;
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
      <WallpaperItemSkeletonLoader isAnimating={isLoading} />
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

export default WallpaperListItem;
