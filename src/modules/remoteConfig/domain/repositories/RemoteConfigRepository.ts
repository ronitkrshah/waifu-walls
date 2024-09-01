/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import RemoteConfigModel from '../models/RemoteConfigModel';

interface RemoteConfigRepository {
  getConfig(): Promise<RemoteConfigModel>;
}

export default RemoteConfigRepository;
