/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {RegisterUserModel} from '../models/RegisterUserModel';

export type UserCredentials = {
  name: string;
  email: string;
  password: string;
};

interface AuthRepository {
  registerNewUser(props: UserCredentials): Promise<RegisterUserModel>;
  loginUser(props: Omit<UserCredentials, 'name'>): Promise<void>;
  createUserDocument(): Promise<void>;
  logOutUser(): Promise<void>;
}

export default AuthRepository;
