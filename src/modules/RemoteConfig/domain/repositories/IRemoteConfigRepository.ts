/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {IRemoteConfigDto} from '../../dto';

interface IRemoteConfigRepository {
  getConfig(): Promise<IRemoteConfigDto>;
}

export default IRemoteConfigRepository;
