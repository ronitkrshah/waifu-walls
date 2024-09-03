/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import ShowWallpaperPreview from '@core/components/screens/Stack/WallpaperPreviewScreen/ShowWallpaperPreview';
import {
  StackNavigationRoutes,
  StackNavigationScreenProps,
} from '@app/navigation/types';

function WallpaperPreviewScreen({
  route,
}: StackNavigationScreenProps<StackNavigationRoutes.WALLPAPER_PREVIEW_SCREEN>) {
  const {wallpaper} = route.params;

  return <ShowWallpaperPreview wallpaper={wallpaper} />;
}

export default WallpaperPreviewScreen;
