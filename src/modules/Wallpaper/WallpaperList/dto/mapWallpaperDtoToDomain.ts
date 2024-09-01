/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */


import { IWallpaper } from '../domain/models';
import {IWallpaperDto} from './IWallpaperDto';

function mapWallpaperDtoToDomain(dto: IWallpaperDto['data'][0]): IWallpaper {
  return {
    id: dto.image_id,
    title: dto.title,
    tags: dto.tags,
    is_nsfw: dto.is_nsfw,
    author: dto.original_author,
    preview_url: dto.preview_url,
    download_url: dto.download_url,
    uploader_id: dto.uploaded_by.user_id,
    uploader_name: dto.uploaded_by.name,
    original_post_link: dto.original_post_link,
  };
}

export default mapWallpaperDtoToDomain;
