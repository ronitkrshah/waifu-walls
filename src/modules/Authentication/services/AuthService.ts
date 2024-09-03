/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {UserDtoMapper} from '../dto/mapper';
import {type INewUserDocumentDto, type IRegisterUserDto} from '../dto/models';
import {
  type IUserCredentials,
  type IAuthRepository,
} from '../domain/repositories';
import {type IUser} from '../domain/models';

class AuthService {
  private _repo: IAuthRepository;

  constructor(repo: IAuthRepository) {
    this._repo = repo;
  }

  /**
   * Create and login user
   */
  public async createNewAccount(props: IUserCredentials): Promise<IUser> {
    let newUser: IRegisterUserDto | null = null;
    let userDocument: INewUserDocumentDto | null = null;

    try {
      newUser = await this._repo.registerNewUser({
        name: props.name,
        email: props.email,
        password: props.password,
      });
      /** Do Not Call `loginWithEmailAndPassword` method in this class */
      await this._repo.loginUser({
        email: props.email,
        password: props.password,
      });
      userDocument = await this._createUserDocument(newUser);
    } catch (e) {
      /** If Creating Document Failed then delete new user data */
      if (userDocument !== null) {
        await this.logoutUser();
        await this._repo.deleteUserAccount(newUser!.$id);
      }
      throw e;
    }
    return UserDtoMapper.fromNewUserDocumentDto(userDocument);
  }

  /**
   * Login With Email And Password
   */
  public async loginWithEmailAndPassword(
    props: Omit<IUserCredentials, 'name'>,
  ) {
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
  private async _createUserDocument(user: IRegisterUserDto) {
    return await this._repo.createUserDocument(user);
  }

  /**
   * Get Currently Logged In User
   */
  async getLoggedInUser() {
    const user = await this._repo.getCurrentUser();
    return UserDtoMapper.fromLoggedInUserDto(user);
  }
}

export default AuthService;
