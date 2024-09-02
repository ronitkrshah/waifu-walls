/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {type IRemoteConfigRepository} from '../domain/repositories';
import {mapRemoteConfigDtoToDomain} from '../dto';

class RemoteConfigService {
  private _repo: IRemoteConfigRepository;

  constructor(repo: IRemoteConfigRepository) {
    this._repo = repo;
  }

  async getConfig() {
    const response = await this._repo.getConfig();
    return mapRemoteConfigDtoToDomain(response);
  }
}

export default RemoteConfigService;
