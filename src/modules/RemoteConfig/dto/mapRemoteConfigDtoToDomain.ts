/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {type IRemoteConfigDto} from './IRemoteConfigDto';
import {type IRemoteConfig} from '../domain/models';

function mapRemoteConfigDtoToDomain(dto: IRemoteConfigDto): IRemoteConfig {
  return {
    version: dto.version,
    shouldUploadImages: dto.should_upload_images,
  };
}

export default mapRemoteConfigDtoToDomain;
