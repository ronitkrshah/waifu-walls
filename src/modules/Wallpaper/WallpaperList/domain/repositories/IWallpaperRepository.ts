/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {IWallpaperDto} from '../../dto';

export interface IWallpaperRepository {
  getWallpapers(
    offset?: number,
    query?: string[],
  ): Promise<IWallpaperDto & {hasNextPage?: number | null}>;
}
