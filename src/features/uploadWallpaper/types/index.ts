/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

export type UploadWallpaperProps = {
  title: string;
  originalAuthorName?: string;
  originalPostLink?: string;
  imagePath: string;
  tags?: string[];
  isAdultContent: boolean;
  userId: string;
};
