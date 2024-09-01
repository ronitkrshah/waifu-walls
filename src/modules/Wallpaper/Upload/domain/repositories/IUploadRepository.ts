/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {UploadWallpaperProps} from '../../types';

interface IUploadRepository {
  uploadWallpaper(props: UploadWallpaperProps & {size: number}): Promise<void>;
}

export default IUploadRepository;
