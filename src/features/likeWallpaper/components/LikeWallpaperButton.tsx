/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Wallpaper} from '@app/types/api/wallpaper';
import {MD3Colors} from 'react-native-paper';
import useLikeWallpaperController from '../controllers/useLikeWallaperController';
import {memo} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  wallpaper: Wallpaper;
  size?: number;
};

function LikeWallpaperButton({wallpaper, size}: Props) {
  const {handleLikeButtonPress, isLiked} = useLikeWallpaperController({
    wallpaper,
  });

  return (
    <MaterialCommunityIcons
      size={size ?? 24}
      name={isLiked ? 'heart' : 'heart-outline'}
      color={isLiked ? MD3Colors.error70 : undefined}
      onPress={handleLikeButtonPress}
    />
  );
}

export default memo(LikeWallpaperButton);
