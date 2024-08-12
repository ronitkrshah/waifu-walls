/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Fragment} from 'react';
import NormalPreviewImage from './NormalPreviewImage';
import {Wallpaper} from '@app/types/api/wallpaper';
import ShowWallpaperActions from '@app/features/wallpaperActions/components/ShowWallpaperActions';
import LikeWallpaperButton from '@app/features/likeWallpaper/components/LikeWallpaperButton';

type Props = {
  wallpaper: Wallpaper;
};

function NormalImagePreviewScreen({wallpaper}: Props) {
  return (
    <Fragment>
      <LikeWallpaperButton wallpaper={wallpaper}>
        <NormalPreviewImage uri={wallpaper.preview_url} />
      </LikeWallpaperButton>
      <ShowWallpaperActions wallpaper={wallpaper} />
    </Fragment>
  );
}

export default NormalImagePreviewScreen;
