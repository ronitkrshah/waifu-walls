/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

type LatestWallpaperModel = {
  id: string;
  title: string;
  is_nsfw: boolean;
  preview_url: string;
  download_url: string;
  author?: string;
  uploaded_by: {
    name: string;
    id: string;
  };
  original_post_link?: string;
};

export default LatestWallpaperModel;
