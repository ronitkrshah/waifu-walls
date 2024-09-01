/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {ILoggedInUserDto, INewUserDocumentDto} from '../models';
import {IUser} from '../../domain/models';

class UserDtoMapper {
  public static fromLoggedInUserDto(dto: ILoggedInUserDto): IUser {
    return {
      name: dto.name,
      email: dto.email,
      userId: dto.$id,
      isAdmeme: dto.isAdmeme,
    };
  }

  public static fromNewUserDocumentDto(dto: INewUserDocumentDto): IUser {
    return {
      name: dto.name,
      email: dto.email,
      userId: dto.$id,
      /** New Users aren't admeme */
      isAdmeme: false,
    };
  }
}

export default UserDtoMapper;
