/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Flex from '@app/components/common/Flex';
import WallpaperPreviewFloatingImage from '@app/components/screens/Stack/WallpaperPreviewScreen/WallpaperPreviewFloatingImage';
import WallpaperPreviewFloatingImageTitle from '@app/components/screens/Stack/WallpaperPreviewScreen/WallpaperPreviewFloatingImageTitle';
import {
  StackNavigationRoutes,
  StackNavigationScreenProps,
} from '@app/types/navigation';

function WallpaperPreviewScreen({
  route,
}: StackNavigationScreenProps<StackNavigationRoutes.WALLPAPER_PREVIEW_SCREEN>) {
  const {wallpaper} = route.params;

  return (
    <Flex flex={1} center>
      <WallpaperPreviewFloatingImage wallpaper={wallpaper} />
      <WallpaperPreviewFloatingImageTitle title={wallpaper.title} />
    </Flex>
  );
}

export default WallpaperPreviewScreen;
