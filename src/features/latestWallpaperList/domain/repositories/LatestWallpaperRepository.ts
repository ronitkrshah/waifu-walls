/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import LatestWallpaperModel from '../models/LatestWallpaperModel';

interface LatestWallpaperRepository {
  getLatestWallpapers(
    offset?: number,
    showAdultImages?: boolean,
  ): Promise<LatestWallpaperModel>;
}

export default LatestWallpaperRepository;
