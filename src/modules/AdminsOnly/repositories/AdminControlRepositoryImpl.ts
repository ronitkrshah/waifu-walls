/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import AppwriteService from '@app/appwrite/AppwriteService';
import {IAdminControlRepository} from '../domain/repositories';
import {env} from '@app/utils/env/env';

class AdminControlRepositoryImpl implements IAdminControlRepository {
  private _api = AppwriteService.getInstance();

  async enableWallpaperUpload(): Promise<void> {
    await this._api.database.updateDocument(
      env.APPWRITE_DATABASE_ID,
      env.APPWRITE_REMOTE_CONFIG_COLLECTION_ID,
      env.APPWRITE_REMOTE_CONFIG_DOCUMENT_ID,
      {
        should_upload_images: true,
      },
    );
  }

  async disableWallpaperUpload(): Promise<void> {
    await this._api.database.updateDocument(
      env.APPWRITE_DATABASE_ID,
      env.APPWRITE_REMOTE_CONFIG_COLLECTION_ID,
      env.APPWRITE_REMOTE_CONFIG_DOCUMENT_ID,
      {
        should_upload_images: false,
      },
    );
  }
}

export default AdminControlRepositoryImpl;
