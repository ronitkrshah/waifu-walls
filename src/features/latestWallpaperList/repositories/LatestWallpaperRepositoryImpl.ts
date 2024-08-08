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
  /** Limit Of Data On Every Page */
  private LIMIT = 3;

  /**
   * Getting Latest Wallpapers from Database
   */
  async getLatestWallpapers(
    offset = 0,
    showAdultImages = false,
  ): Promise<LatestWallpaperModel> {
    const response = await new Promise(resolve => {
      setTimeout(() => {
        resolve({
          total: latestImagesDummyData.length,
          data: latestImagesDummyData
            .slice(offset, this.LIMIT + offset)
            .filter(item =>
              showAdultImages ? item : item.is_nsfw === showAdultImages,
            ),
        });
      }, 3000);
    });

    return {
      currentOffset: offset,
      hasNextPage:
        offset + this.LIMIT < response.total ? offset + this.LIMIT : undefined,
      data: response.data,
      total: response.total,
    };
  }
}

export default LatestWallpaperRepositoryImpl;
