/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * This isn't the actual response from the api. It's a DTO from the Actual Response
 * Data Model. This DTO type will be used in varius screens. We are not using
 * actual response model becuase there are some information that are useless
 * in screens where they only need only wallpaper data.
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