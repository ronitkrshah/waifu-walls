/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import AppwriteService from '@app/appwrite/AppwriteService';
import {EnviromentVariables} from '@core/enviroment';
import {type IRemoteConfigRepository} from '../domain/repositories';
import {type IRemoteConfigDto} from '../dto';

class RemoteConfigRepositoryImpl implements IRemoteConfigRepository {
  private _api = AppwriteService.getInstance();

  /**
   * Get Remote Config
   */
  async getConfig() {
    const config = await this._api.database.getDocument(
      EnviromentVariables.APPWRITE_DATABASE_ID,
      EnviromentVariables.APPWRITE_REMOTE_CONFIG_COLLECTION_ID,
      EnviromentVariables.APPWRITE_REMOTE_CONFIG_DOCUMENT_ID,
    );

    return config as IRemoteConfigDto;
  }
}

export default RemoteConfigRepositoryImpl;
