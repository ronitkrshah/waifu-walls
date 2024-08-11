/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {GetLoggedInUserModel} from '../domain/models/GetLoggedInUserModel';
import {NewUserDocumentModel} from '../domain/models/UserDocumentModel';
import {User} from './UserDTO';

class TranformToDTOAuth {
  public static fromLoggedInUserModel(model: GetLoggedInUserModel): User {
    return {
      name: model.name,
      email: model.email,
      userId: model.$id,
      isAdmeme: model.isAdmeme,
    };
  }

  public static fromNewUserDocumentModel(model: NewUserDocumentModel): User {
    return {
      name: model.name,
      email: model.email,
      userId: model.$id,
      /** New Users aren't admeme */
      isAdmeme: false,
    };
  }
}

export default TranformToDTOAuth;
