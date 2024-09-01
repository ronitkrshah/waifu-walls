/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Domain Interface for Wallpaper
 */
interface IWallpaper  {
  id: string;
  title: string;
  is_nsfw: boolean;
  tags: string[];
  preview_url: string;
  download_url: string;
  author?: string;
  uploader_name: string;
  uploader_id: string;
  original_post_link?: string;
};

export default IWallpaper