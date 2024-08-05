/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

type LatestWallpaperModel = {
  currentOffset: number;
  hasNextPage?: number | null;
  total: number;
  data: Array<ActualData>;
};

type ActualData = {
  id: string;
  title: string;
  is_nsfw: boolean;
  tags: string[];
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
