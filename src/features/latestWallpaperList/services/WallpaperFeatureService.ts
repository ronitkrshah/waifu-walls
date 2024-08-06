/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import LatestWallpaperRepository from '../domain/repositories/LatestWallpaperRepository';
import {LatestWallpaperDTO} from '../dto';
import transformToDto from '../dto/transformToDto';

class LatestWallpaperFeatureService {
  repository: LatestWallpaperRepository;

  constructor(repository: LatestWallpaperRepository) {
    this.repository = repository;
  }

  /**
   * Get Latest Wallpapers
   */
  public async getLatestWallpapers(
    offset: number,
  ): Promise<LatestWallpaperDTO> {
    const {data, hasNextPage} = await this.repository.getLatestWallpapers(
      offset,
    );

    return {
      wallpaperDetails: data.map(item => transformToDto(item)),
      hasNextPage: hasNextPage,
    };
  }
}

export default LatestWallpaperFeatureService;
