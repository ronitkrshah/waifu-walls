/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Wallpaper} from '@app/types/api/wallpaper';

export type LatestWallpaperDTO = {
  hasNextPage?: number | null;
  wallpaperDetails: Wallpaper[];
};
