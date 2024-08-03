/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {latestImagesDummyData} from '@app/dummy_data';

class LatestWallpaperFeatureService {
  // TODO: Actual Repository Implementation
  constructor() {}

  /**
   * Get Latest Wallpapers
   */
  public async getLatestWallpapers(): Promise<typeof latestImagesDummyData> {
    const response = await new Promise(resolve => {
      setTimeout(() => {
        resolve(latestImagesDummyData);
      }, 2000);
    });

    return response as typeof latestImagesDummyData;
  }
}

export default LatestWallpaperFeatureService;
