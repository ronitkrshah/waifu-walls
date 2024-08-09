/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import AppwriteService from '@app/appwrite/AppwriteService';
import {env} from '@app/utils/env/env';
import RemoteConfigRepository from '../domain/repositories/RemoteConfigRepository';
import RemoteConfigModel from '../domain/models/RemoteConfigModel';

class RemoteConfigRepositoryImpl implements RemoteConfigRepository {
  private _api = AppwriteService.getInstance();

  /**
   * Get Remote Config
   */
  async getConfig() {
    const config = await this._api.database.getDocument(
      env.APPWRITE_DATABASE_ID,
      env.APPWRITE_REMOTE_CONFIG_COLLECTION_ID,
      env.APPWRITE_REMOTE_CONFIG_DOCUMENT_ID,
    );

    return config as RemoteConfigModel;
  }
}

export default RemoteConfigRepositoryImpl;
