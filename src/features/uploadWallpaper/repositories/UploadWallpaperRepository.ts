/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import AppwriteService from '@app/appwrite/AppwriteService';
import {UploadWallpaperProps} from '../types';
import {env} from '@app/utils/env/env';
import {ID} from 'react-native-appwrite';

class UploadWallpaperRepository {
  private _api = AppwriteService.getInstance();

  async uploadWallpaper(props: UploadWallpaperProps) {
    const databaseResponse = await this._api.database.createDocument(
      env.APPWRITE_DATABASE_ID,
      env.APPWRITE_WALLPAPERS_COLLECTION_ID!,
      ID.unique(),
      {
        title: props.title,
        preview_url: 'something',
        download_url: 'something',
        author: props.originalAuthorName,
        is_nsfw: props.isAdultContent,
        original_post_link: 'something',
        tags: props.tags,
        image_id: 'something',
        uploaded_by: props.userId,
      },
    );

    console.log(JSON.stringify(databaseResponse, null, 2));
  }
}

export default UploadWallpaperRepository;
