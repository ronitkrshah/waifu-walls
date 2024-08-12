/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import RemoteConfigRepositoryImpl from '@app/features/remoteConfig/repositories/RemoteConfigRepositoryImpl';
import RemoteConfigService from '@app/features/remoteConfig/services/RemoteConfigService';
import AdminControlRepository from '../domain/repositories/AdminControlRepository';

class AdminControlService extends RemoteConfigService {
  private _repository: AdminControlRepository;

  constructor(repo: AdminControlRepository) {
    super(new RemoteConfigRepositoryImpl());
    this._repository = repo;
  }

  /** Enable Or Disable Image Upload Feature */
  public async setImageUploadFeature(value: boolean) {
    if (value) {
      await this._repository.enableWallpaperUpload();
    } else {
      await this._repository.disableWallpaperUpload();
    }
  }
}

export default AdminControlService;
