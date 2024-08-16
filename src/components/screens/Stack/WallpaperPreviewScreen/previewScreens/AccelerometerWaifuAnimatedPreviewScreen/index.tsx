/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import AccelerometerPreviewAnimatedImage from './AccelerometerPreviewAnimatedImage';
import AccelerometerPreviewImageTitle from './AccelerometerPreviewImageTitle';
import {Wallpaper} from '@app/types/api/wallpaper';
import Flex from '@app/components/common/Flex';

type Props = {
  wallpaper: Wallpaper;
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