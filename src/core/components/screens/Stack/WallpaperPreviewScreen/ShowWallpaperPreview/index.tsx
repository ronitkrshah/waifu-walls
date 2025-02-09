/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {useGlobalStore} from '@core/store';
import {Fragment} from 'react';
import NormalWaifuPreviewScreen from '../previewScreens/NormalWaifuPreviewScreen';
import AccelerometerWaifuAnimatedPreviewScreen from '../previewScreens/AccelerometerWaifuAnimatedPreviewScreen';
import {IWallpaper} from '@core/interfaces';

type Props = {
  wallpaper: IWallpaper;
};

function ShowWallpaperPreview({wallpaper}: Props) {
  const useCustomPreview = useGlobalStore(
    state => state.appSettings.useCustomizePreviewScreen,
  );

  return (
    <Fragment>
      {useCustomPreview ? (
        <AccelerometerWaifuAnimatedPreviewScreen wallpaper={wallpaper} />
      ) : (
        <NormalWaifuPreviewScreen wallpaper={wallpaper} />
      )}
    </Fragment>
  );
}

export default ShowWallpaperPreview;
