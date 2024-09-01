/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {ILoggedInUserDto, IActiveSessionDto, IRegisterUserDto, INewUserDocumentDto} from '../../dto/models';

export interface IUserCredentials {
  name: string;
  email: string;
  password: string;
};

interface IAuthRepository {
  registerNewUser(props: IUserCredentials): Promise<IRegisterUserDto>;

  loginUser(props: Omit<IUserCredentials, 'name'>): Promise<IActiveSessionDto>;

  logOutUser(): Promise<void>;

  createUserDocument(user: IRegisterUserDto): Promise<INewUserDocumentDto>;

  getCurrentUser(): Promise<ILoggedInUserDto>;

  deleteUserAccount(userId: string): Promise<void>;
}

export default IAuthRepository;
