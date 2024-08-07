/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import AppwriteService from '@app/appwrite/AppwriteService';
import AuthRepository, {
  UserCredentials,
} from '../domain/repositories/AuthRepository';
import {ID} from 'react-native-appwrite';
import {RegisterUserModel} from '../domain/models/RegisterUserModel';

class AuthRepositoryImpl implements AuthRepository {
  /**
   * Create a new user account
   */
  async registerNewUser(props: UserCredentials): Promise<RegisterUserModel> {
    const api = AppwriteService.getInstance().account;
    console.log('Creating Account');
    const user = await api.create(
      ID.unique(),
      props.email,
      props.password,
      props.name,
    );
    return user;
  }

  /**
   * Login an existing registered user
   */
  async loginUser(props: Omit<UserCredentials, 'name'>): Promise<void> {
    throw new Error('Method not implemented.');
  }

  /**
   * Create a new user document
   */
  async createUserDocument(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  /**
   * Log out currently logged in user on current device
   */
  async logOutUser(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export default AuthRepositoryImpl;
