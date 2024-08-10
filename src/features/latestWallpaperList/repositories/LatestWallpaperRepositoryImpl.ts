/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import LatestWallpaperRepository from '../domain/repositories/LatestWallpaperRepository';
import LatestWallpaperModel from '../domain/models/LatestWallpaperModel';
import AppwriteService from '@app/appwrite/AppwriteService';
import {env} from '@app/utils/env/env';
import {Query} from 'react-native-appwrite';

class LatestWallpaperRepositoryImpl implements LatestWallpaperRepository {
  private _repo = AppwriteService.getInstance();

  /** Limit Of Data On Every Page */
  private LIMIT = 20;

  /**
   * Getting Latest Wallpapers from Database
   */
  async getLatestWallpapers(
    offset = 0,
    showAdultImages = false,
  ): Promise<LatestWallpaperModel> {
    const queries = [
      Query.orderDesc('$createdAt'),
      Query.offset(offset),
      Query.limit(this.LIMIT),
    ];

    /**
     *
     * I don't know how to query based on boolean value in appwrite
     * that's i'm searching for null value :)
     */
    if (!showAdultImages) {
      queries.push(Query.isNull('is_nsfw'));
    }

    const databseResponse = await this._repo.database.listDocuments(
      env.APPWRITE_DATABASE_ID,
      env.APPWRITE_WALLPAPERS_COLLECTION_ID,
      queries,
    );

    return {
      currentOffset: offset,
      hasNextPage:
        offset + this.LIMIT < databseResponse.total
          ? offset + this.LIMIT
          : undefined,
      data: databseResponse.documents as LatestWallpaperModel['data'],
      total: databseResponse.total,
    };
  }
}

export default LatestWallpaperRepositoryImpl;
