/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Query} from 'react-native-appwrite';
import WallpaperListRepository from '../domain/repositories/WallpaperListRepository';
import {LatestWallpaperDTO} from '../dto';
import transformToDto from '../dto/transformToDto';
import {WallpaperLimits} from '@app/utils/constants/limits';

class WallpaperListService {
  private _repo: WallpaperListRepository;

  /**
   * Constructor to initialize the service with the provided repository
   */
  constructor(repository: WallpaperListRepository) {
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
  private async fetchWallpapers(
    offset: number,
    query: string[],
  ): Promise<LatestWallpaperDTO> {
    const {data, hasNextPage} = await this._repo.getWallpapers(offset, query);

    return {
      wallpaperDetails: data.map(item => transformToDto(item)),
      hasNextPage,
    };
  }
}

export default WallpaperListService;
