/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {LatestWallpaperDTO} from '@app/features/latestWallpaperList/dto';
import {Fragment} from 'react';
import AccelerometerPreviewMovingImage from './AccelerometerPreviewMovingImage';
import AccelerometerPreviewImageTitle from './AccelerometerPreviewImageTitle';

type Props = {
  wallpaper: LatestWallpaperDTO;
};

function AccelerometerPreviewScreen({wallpaper}: Props) {
  return (
    <Fragment>
      <AccelerometerPreviewMovingImage wallpaper={wallpaper} />
      <AccelerometerPreviewImageTitle title={wallpaper.title} />
    </Fragment>
  );
}

export default AccelerometerPreviewScreen;
