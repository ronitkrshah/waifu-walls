/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

interface AdminControlRepository {
  disableWallpaperUpload(): Promise<void>;
  enableWallpaperUpload(): Promise<void>;
}

export default AdminControlRepository;