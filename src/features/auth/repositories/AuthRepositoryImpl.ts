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
import {LoginSessionModel} from '../domain/models/LoginSessionModel';
import {env} from '@app/utils/env/env';
import {UserDocumentModel} from '../domain/models/UserDocumentModel';
import {GetLoggedInUserModel} from '../domain/models/GetLoggedInUserModel';

class AuthRepositoryImpl implements AuthRepository {
  private _api: AppwriteService;

  constructor() {
    this._api = AppwriteService.getInstance();
  }

  /**
   * Create a new user account
   */
  async registerNewUser(props: UserCredentials): Promise<RegisterUserModel> {
    const user = await this._api.account.create(
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
  async loginUser(
    props: Omit<UserCredentials, 'name'>,
  ): Promise<LoginSessionModel> {
    const session = await this._api.account.createEmailPasswordSession(
      props.email,
      props.password,
    );
    return session;
  }

  /**
   * Storing user document
   */
  async createUserDocument(
    user: RegisterUserModel,
  ): Promise<UserDocumentModel> {
    const databaseResponse = await this._api.database.createDocument(
      env.APPWRITE_DATABASE_ID,
      env.APPWRITE_USERS_COLLECTION_ID,
      user.$id,
      {
        name: user.name,
        email: user.email,
        user_id: user.$id,
      },
    );

    return databaseResponse as UserDocumentModel;
  }

  /**
   * Log out currently logged in user on current device
   */
  async logOutUser(): Promise<void> {
    await this._api.account.deleteSession('current');
  }

  /**
   * Get Currently Logged In user
   */
  async getCurrentUser() {
    const currentUser: GetLoggedInUserModel = await this._api.account.get();
    return currentUser;
  }

  /**
   * Delete User Account
   */
  async deleteUserAccount(userId: string) {
    await this._api.account.deleteIdentity(userId);
  }
}

export default AuthRepositoryImpl;
