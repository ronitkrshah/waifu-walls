/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import WallpaperModel from '../models/WallpaperModel';

interface WallpaperListRepository {
  getWallpapers(offset?: number, query?: string[]): Promise<WallpaperModel>;
}

export default WallpaperListRepository;
