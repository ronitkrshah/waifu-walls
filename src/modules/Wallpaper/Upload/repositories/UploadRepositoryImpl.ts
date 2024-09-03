/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import AppwriteService from '@app/appwrite/AppwriteService';
import {UploadWallpaperProps} from '../types';
import {EnviromentVariables} from '@core/enviroment';
import {ID, Models} from 'react-native-appwrite';
import {IUploadRepository} from '../domain/repositories';

class UploadRepositoryImpl implements IUploadRepository {
  private _api = AppwriteService.getInstance();

  /**
   * Create A Wallpaper Document In Database
   */
  async uploadWallpaper(props: UploadWallpaperProps & {size: number}) {
    let uploadedWallpaper: Models.File | null = null;

    try {
      /** Uploading Image To Bucket */
      uploadedWallpaper = await this.uploadImage(
        props.imagePath,
        props.size,
        props.title ?? 'Undefined',
      );

      /** Creating Document */
      await this._api.database.createDocument(
        EnviromentVariables.APPWRITE_DATABASE_ID,
        EnviromentVariables.APPWRITE_WALLPAPERS_COLLECTION_ID!,
        uploadedWallpaper.$id,
        {
          title: props.title ?? 'Undefined',
          original_author: props.originalAuthorName,
          original_post_link: props.originalPostLink,
          is_nsfw: props.isAdultContent,
          tags: props.tags,
          image_id: uploadedWallpaper.$id,
          uploaded_by: props.userId,
          preview_url: `${this._api.storage.getFilePreview(
            EnviromentVariables.APPWRITE_WALLPAPERS_BUCKET_ID!,
            uploadedWallpaper.$id,
          )}`,
          download_url: `${this._api.storage.getFileDownload(
            EnviromentVariables.APPWRITE_WALLPAPERS_BUCKET_ID!,
            uploadedWallpaper.$id,
          )}`,
        },
      );
    } catch (e) {
      /** If Creating Document Fails Then Delete File From Server */
      if (uploadedWallpaper) {
        this.deleteImageFromServer(uploadedWallpaper.$id);
      }

      throw e;
    }
  }

  /**
   * Upload Image to bucket
   */
  private async uploadImage(
    imagePath: string,
    imageSize: number,
    fileName: string,
  ) {
    const databaseResponse = await this._api.storage.createFile(
      EnviromentVariables.APPWRITE_WALLPAPERS_BUCKET_ID!,
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

  /**
   * Cleanup
   */
  async deleteImageFromServer(imageId: string) {
    await this._api.storage.deleteFile(
      EnviromentVariables.APPWRITE_WALLPAPERS_BUCKET_ID,
      imageId,
    );
  }
}

export default UploadRepositoryImpl;
