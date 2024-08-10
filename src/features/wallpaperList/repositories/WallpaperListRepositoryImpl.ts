/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import WallpaperListRepository from '../domain/repositories/WallpaperListRepository';
import WallpaperModel from '../domain/models/WallpaperModel';
import AppwriteService from '@app/appwrite/AppwriteService';
import {env} from '@app/utils/env/env';
import {WallpaperLimits} from '@app/utils/constants/limits';

class WallpaperListRepositoryImpl implements WallpaperListRepository {
  private _repo = AppwriteService.getInstance();

  /**
   * Getting Latest Wallpapers from Database
   */
  async getWallpapers(
    offset: number,
    queries: string[],
  ): Promise<WallpaperModel> {
    const databseResponse = await this._repo.database.listDocuments(
      env.APPWRITE_DATABASE_ID,
      env.APPWRITE_WALLPAPERS_COLLECTION_ID,
      queries,
    );

    return {
      currentOffset: offset,
      hasNextPage:
        offset + WallpaperLimits.MAXIMUM_WALLPAPERS_PER_QUERY <
        databseResponse.total
          ? offset + WallpaperLimits.MAXIMUM_WALLPAPERS_PER_QUERY
          : undefined,
      data: databseResponse.documents as WallpaperModel['data'],
      total: databseResponse.total,
    };
  }
}

export default WallpaperListRepositoryImpl;
