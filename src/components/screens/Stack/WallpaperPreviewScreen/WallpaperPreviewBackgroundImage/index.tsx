/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

type Props = {
  imageUrl: string;
};

function WallpaperPreviewBackgroundImage({imageUrl}: Props) {
  return (
    <FastImage
      source={{uri: imageUrl}}
      style={StyleSheet.absoluteFillObject}
      blurRadius={20}
    />
  );
}

export default WallpaperPreviewBackgroundImage;
