/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {LatestWallpaperDTO} from '.';
import LatestWallpaperModel from '../domain/models/LatestWallpaperModel';

function transformToDto(model: LatestWallpaperModel): LatestWallpaperDTO {
  return {
    id: model.id,
    title: model.title,
    is_nsfw: model.is_nsfw,
    author: model.author,
    preview_url: model.preview_url,
    download_url: model.download_url,
    uploader_id: model.uploaded_by.id,
    uploader_name: model.uploaded_by.name,
    original_post_link: model.original_post_link,
  };
}

export default transformToDto;