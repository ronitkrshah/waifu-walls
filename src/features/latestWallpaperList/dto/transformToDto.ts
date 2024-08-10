/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Wallpaper} from '@app/types/api/wallpaper';
import LatestWallpaperModel from '../domain/models/LatestWallpaperModel';

function transformToDto(
  model: LatestWallpaperModel['data'][number],
): Wallpaper {
  return {
    id: model.image_id,
    title: model.title,
    tags: model.tags,
    is_nsfw: model.is_nsfw,
    author: model.original_author,
    preview_url: model.preview_url,
    download_url: model.download_url,
    uploader_id: model.uploaded_by.user_id,
    uploader_name: model.uploaded_by.name,
    original_post_link: model.original_post_link,
  };
}

export default transformToDto;
