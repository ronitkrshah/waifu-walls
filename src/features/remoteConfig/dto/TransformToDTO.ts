/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import RemoteConfigModel from '../domain/models/RemoteConfigModel';
import RemoteConfigDTO from './RemoteConfigDTO';

class TransformToDTO {
  public static toRemoteConfigDto(model: RemoteConfigModel): RemoteConfigDTO {
    return {
      version: model.version,
    };
  }
}

export default TransformToDTO;
