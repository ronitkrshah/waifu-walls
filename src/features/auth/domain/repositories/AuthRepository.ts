/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {GetLoggedInUserModel} from '../models/GetLoggedInUserModel';
import {LoginSessionModel} from '../models/LoginSessionModel';
import {RegisterUserModel} from '../models/RegisterUserModel';
import {UserDocumentModel} from '../models/UserDocumentModel';

export type UserCredentials = {
  name: string;
  email: string;
  password: string;
};

interface AuthRepository {
  registerNewUser(props: UserCredentials): Promise<RegisterUserModel>;
  loginUser(props: Omit<UserCredentials, 'name'>): Promise<LoginSessionModel>;
  logOutUser(): Promise<void>;
  createUserDocument(user: RegisterUserModel): Promise<UserDocumentModel>;
  getCurrentUser(): Promise<GetLoggedInUserModel>;
  deleteUserAccount(userId: string): Promise<void>;
}

export default AuthRepository;
