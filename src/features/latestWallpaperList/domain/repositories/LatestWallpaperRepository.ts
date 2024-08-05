/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import LatestWallpaperModel from '../models/LatestWallpaperModel';

type LatestWallpaperRepository = {
  getLatestWallpapers(offset?: number): Promise<LatestWallpaperModel>;
};

export default LatestWallpaperRepository;
