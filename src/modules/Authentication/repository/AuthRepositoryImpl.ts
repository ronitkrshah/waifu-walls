/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import AppwriteService from '@app/appwrite/AppwriteService';
import IAuthRepository, {
  IUserCredentials,
} from '../domain/repositories/IAuthRepository';
import {ID} from 'react-native-appwrite';
import {IRegisterUserDto} from '../dto/models/IRegisterUserDto';
import {IActiveSessionDto} from '../dto/models/IActiveSessionDto';
import {env} from '@app/utils/env/env';
import {INewUserDocumentDto} from '../dto/models/INewUserDocumentDto';
import {ILoggedInUserDto} from '../dto/models/ILoggedInUserDto';

class AuthRepositoryImpl implements IAuthRepository {
  private _api: AppwriteService;

  constructor() {
    this._api = AppwriteService.getInstance();
  }

  /**
   * Create a new user account
   */
  async registerNewUser(props: IUserCredentials): Promise<IRegisterUserDto> {
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
    props: Omit<IUserCredentials, 'name'>,
  ): Promise<IActiveSessionDto> {
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
    user: IRegisterUserDto,
  ): Promise<INewUserDocumentDto> {
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

    return databaseResponse as INewUserDocumentDto;
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
  async getCurrentUser(): Promise<ILoggedInUserDto> {
    const currentUser = await this._api.account.get();
    const teamsList = await this._api.teams.list();

    /** Admeme not Admin :) */
    const isAdmeme = teamsList.teams.find(team => team.name === 'admin');

    return {
      ...currentUser,
      isAdmeme: isAdmeme ? true : false,
    };
  }

  /**
   * Delete User Account
   */
  async deleteUserAccount(userId: string) {
    await this._api.account.deleteIdentity(userId);
  }
}

export default AuthRepositoryImpl;
