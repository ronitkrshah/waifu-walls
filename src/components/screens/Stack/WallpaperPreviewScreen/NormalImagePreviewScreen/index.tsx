/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Fragment} from 'react';
import NormalPreviewImage from './NormalPreviewImage';
import {WallpaperResponseData} from '@app/types/api/wallpaper';

type Props = {
  wallpaper: WallpaperResponseData;
};

function NormalImagePreviewScreen({wallpaper}: Props) {
  return (
    <Fragment>
      <NormalPreviewImage uri={wallpaper.preview_url} />
    </Fragment>
  );
}

export default NormalImagePreviewScreen;
