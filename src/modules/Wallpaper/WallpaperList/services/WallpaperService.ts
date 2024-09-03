/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Query} from 'react-native-appwrite';
import {IWallpaperRepository} from '../domain/repositories';
import {WallpaperLimits} from '@core/constants';
import {mapWallpaperDtoToDomain} from '../dto';

class WallpaperService {
  private _repo: IWallpaperRepository;

  /**
   * Constructor to initialize the service with the provided repository
   */
  constructor(repository: IWallpaperRepository) {
    this._repo = repository;
  }

  /**
   * Get Wallpapers from the api
   *
   * @param offset - Offset From The First Wallpaper
   * @param showAdultImages - Flag To Show Adult Images
   * @param query - String or Tags Array (Optional)
   */
  public async getWallpapers(
    offset: number,
    showAdultImages: boolean,
    query?: string | string[],
  ) {
    /**
     * Queries
     */
    const queries = [
      Query.orderDesc('$createdAt'),
      Query.limit(WallpaperLimits.MAXIMUM_WALLPAPERS_PER_QUERY),
      Query.offset(offset),
    ];

    /**
     * Basically I don't know how to query with bool values. That's why checking
     * null in database. So if value is null means false
     */
    !showAdultImages && queries.push(Query.isNull('is_nsfw'));

    /**
     * Conditional Queries
     */
    if (query) {
      if (Array.isArray(query)) {
        queries.push(Query.contains('tags', query));
      } else {
        queries.push(Query.search('title', query));
      }
    }

    /** Fetching Wallpapers */
    return await this.fetchWallpapers(offset, queries);
  }

  /**
   * FetchWallpapers Nothing Else :)
   */
  private async fetchWallpapers(offset: number, query: string[]) {
    const {data, hasNextPage} = await this._repo.getWallpapers(offset, query);

    return {
      wallpaperDetails: data.map(item => mapWallpaperDtoToDomain(item)),
      hasNextPage,
    };
  }
}

export default WallpaperService;
