/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {latestImagesDummyData} from '@app/dummy_data';
import LatestWallpaperRepository from '../domain/repositories/LatestWallpaperRepository';
import LatestWallpaperModel from '../domain/models/LatestWallpaperModel';

class LatestWallpaperRepositoryImpl implements LatestWallpaperRepository {
  /**
   * Getting Latest Wallpapers from Database
   */
  async getLatestWallpapers() {
    const response = await new Promise(resolve => {
      setTimeout(() => {
        resolve(latestImagesDummyData);
      }, 3000);
    });

    return response as LatestWallpaperModel[];
  }
}

export default LatestWallpaperRepositoryImpl;
