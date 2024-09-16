/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {IWallpaper} from '@core/interfaces';
import AccelerometerPreviewAnimatedImage from './AccelerometerPreviewAnimatedImage';
import AccelerometerPreviewImageTitle from './AccelerometerPreviewImageTitle';
import {Flex} from '@core/components/ui';

type Props = {
  wallpaper: IWallpaper;
};

function AccelerometerWaifuAnimatedPreviewScreen({wallpaper}: Props) {
  return (
    <Flex flex={1} center>
      <AccelerometerPreviewAnimatedImage wallpaper={wallpaper} />
      <AccelerometerPreviewImageTitle title={wallpaper.title} />
    </Flex>
  );
}

export default AccelerometerWaifuAnimatedPreviewScreen;
