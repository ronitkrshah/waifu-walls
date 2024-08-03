/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Flex from '@app/components/common/Flex';
import WallpaperPreviewBackgroundImage from '@app/components/screens/Stack/WallpaperPreviewScreen/WallpaperPreviewBackgroundImage';
import WallpaperPreviewFloatingImage from '@app/components/screens/Stack/WallpaperPreviewScreen/WallpaperPreviewFloatingImage';
import WallpaperPreviewFloatingImageTitle from '@app/components/screens/Stack/WallpaperPreviewScreen/WallpaperPreviewFloatingImageTitle';
import {
  StackNavigationRoutes,
  StackNavigationScreenProps,
} from '@app/types/navigation';
import {Fragment} from 'react';

function WallpaperPreviewScreen({
  route,
}: StackNavigationScreenProps<StackNavigationRoutes.WALLPAPER_PREVIEW_SCREEN>) {
  const {wallpaper} = route.params;

  return (
    <Fragment>
      <WallpaperPreviewBackgroundImage imageUrl={wallpaper.preview_url} />
      <Flex flex={1} center>
        <WallpaperPreviewFloatingImageTitle title={wallpaper.title} />
        <WallpaperPreviewFloatingImage wallpaper={wallpaper} />
      </Flex>
    </Fragment>
  );
}

export default WallpaperPreviewScreen;
