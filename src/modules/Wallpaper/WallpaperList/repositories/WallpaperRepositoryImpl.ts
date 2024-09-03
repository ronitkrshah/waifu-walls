/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {IWallpaperRepository} from '../domain/repositories';
import AppwriteService from '@app/appwrite/AppwriteService';
import {EnviromentVariables} from '@core/enviroment';
import {WallpaperLimits} from '@core/constants';
import {IWallpaperDto} from '../dto';

class WallpaperListRepositoryImpl implements IWallpaperRepository {
  private _repo = AppwriteService.getInstance();

  /**
   * Getting Latest Wallpapers from Database
   */
  async getWallpapers(offset: number, queries: string[]) {
    const databseResponse = await this._repo.database.listDocuments(
      EnviromentVariables.APPWRITE_DATABASE_ID,
      EnviromentVariables.APPWRITE_WALLPAPERS_COLLECTION_ID,
      queries,
    );

    return {
      currentOffset: offset,
      hasNextPage:
        offset + WallpaperLimits.MAXIMUM_WALLPAPERS_PER_QUERY <
        databseResponse.total
          ? offset + WallpaperLimits.MAXIMUM_WALLPAPERS_PER_QUERY
          : undefined,
      data: databseResponse.documents as IWallpaperDto['data'],
      total: databseResponse.total,
    };
  }
}

export default WallpaperListRepositoryImpl;
