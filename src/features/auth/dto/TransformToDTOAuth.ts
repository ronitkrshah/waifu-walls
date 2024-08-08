/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {GetLoggedInUserModel} from '../domain/models/GetLoggedInUserModel';
import {UserDocumentModel} from '../domain/models/UserDocumentModel';
import {User} from './UserDTO';

class TranformToDTOAuth {
  public static toUserDto(
    model: UserDocumentModel | GetLoggedInUserModel,
  ): User {
    return {
      name: model.name,
      email: model.email,
      userId: model.$id,
    };
  }
}

export default TranformToDTOAuth;
