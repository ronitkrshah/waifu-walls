/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import RemoteConfigRepository from '../domain/repositories/RemoteConfigRepository';
import TransformToDTO from '../dto/TransformToDTO';

class RemoteConfigService {
  private _repo: RemoteConfigRepository;

  constructor(repo: RemoteConfigRepository) {
    this._repo = repo;
  }

  async getConfig() {
    const model = await this._repo.getConfig();
    return TransformToDTO.toRemoteConfigDto(model);
  }
}

export default RemoteConfigService;
