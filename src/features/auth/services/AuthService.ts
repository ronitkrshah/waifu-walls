/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {RegisterUserModel} from '../domain/models/RegisterUserModel';
import AuthRepository, {
  UserCredentials,
} from '../domain/repositories/AuthRepository';
import TranformToDTOAuth from '../dto/TransformToDTOAuth';
import {User} from '../dto/UserDTO';

class AuthService {
  private _repo: AuthRepository;

  constructor(repo: AuthRepository) {
    this._repo = repo;
  }

  /**
   * Create and login user
   */
  public async createNewAccount(props: UserCredentials): Promise<User> {
    const response = await this._repo.registerNewUser({
      name: props.name,
      email: props.email,
      password: props.password,
    });
    /** Do Not Call `loginWithEmailAndPassword` method in this class */
    await this._repo.loginUser({
      email: props.email,
      password: props.password,
    });
    const databaseUserDocument = await this.createUserDocument(response);
    return TranformToDTOAuth.toUserDto(databaseUserDocument);
  }

  /**
   * Login With Email And Password
   */
  public async loginWithEmailAndPassword(props: Omit<UserCredentials, 'name'>) {
    await this._repo.loginUser({
      email: props.email,
      password: props.password,
    });
    return await this.getLoggedInUser();
  }

  /**
   * Log Out
   */
  public async logoutUser() {
    await this._repo.logOutUser();
  }

  /**
   * Create User Document
   */
  private async createUserDocument(user: RegisterUserModel) {
    return await this._repo.createUserDocument(user);
  }

  /**
   * Get Currently Logged In User
   */
  async getLoggedInUser() {
    const user = await this._repo.getCurrentUser();
    return TranformToDTOAuth.toUserDto(user);
  }
}

export default AuthService;
