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
import UploadWallpaperRepository from '../domain/repositories/UploadWallpaperRepository';

class UploadWallpaperRepositoryImpl implements UploadWallpaperRepository {
  private _api = AppwriteService.getInstance();

  /**
   * Create A Wallpaper Document In Database
   */
  async uploadWallpaper(props: UploadWallpaperProps & {size: number}) {
    /** Uploading Image To Bucket */
    const {$id: imageId} = await this.uploadImage(
      props.imagePath,
      props.size,
      props.title,
    );

    await this._api.database.createDocument(
      env.APPWRITE_DATABASE_ID,
      env.APPWRITE_WALLPAPERS_COLLECTION_ID!,
      imageId,
      {
        title: props.title,
        preview_url: `${this._api.storage.getFilePreview(
          env.APPWRITE_WALLPAPERS_BUCKET_ID!,
          imageId,
        )}`,
        download_url: `${this._api.storage.getFileDownload(
          env.APPWRITE_WALLPAPERS_BUCKET_ID!,
          imageId,
        )}`,
        original_author: props.originalAuthorName,
        original_post_link: props.originalPostLink,
        is_nsfw: props.isAdultContent,
        tags: props.tags,
        image_id: imageId,
        uploaded_by: props.userId,
      },
    );
  }

  private async uploadImage(
    imagePath: string,
    imageSize: number,
    fileName: string,
  ) {
    const databaseResponse = await this._api.storage.createFile(
      env.APPWRITE_WALLPAPERS_BUCKET_ID!,
      ID.unique(),
      {
        uri: imagePath,
        name: `${fileName}.jpg`,
        size: imageSize,
        type: 'image/jpeg',
      },
    );

    return databaseResponse;
  }
}

export default UploadWallpaperRepositoryImpl;
