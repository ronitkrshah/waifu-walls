/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import useGlobalStore from '@app/store';
import {Wallpaper} from '@app/types/api/wallpaper';
import {Fragment} from 'react';
import NormalWaifuPreviewScreen from '../previewScreens/NormalWaifuPreviewScreen';
import AccelerometerWaifuAnimatedPreviewScreen from '../previewScreens/AccelerometerWaifuAnimatedPreviewScreen';

type Props = {
  wallpaper: Wallpaper;
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