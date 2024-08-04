/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {LatestWallpaperDTO} from '@app/features/latestWallpaperList/dto';
import {Fragment} from 'react';
import NormalPreviewImage from './NormalPreviewImage';

type Props = {
  wallpaper: LatestWallpaperDTO;
};

function NormalImagePreviewScreen({wallpaper}: Props) {
  return (
    <Fragment>
      <NormalPreviewImage uri={wallpaper.preview_url} />
    </Fragment>
  );
}

export default NormalImagePreviewScreen;
