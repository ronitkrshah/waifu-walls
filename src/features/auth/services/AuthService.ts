/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import AuthRepository, {
  UserCredentials,
} from '../domain/repositories/AuthRepository';

class AuthService {
  private _repo: AuthRepository;

  constructor(repo: AuthRepository) {
    this._repo = repo;
  }

  /**
   * Nothing Special. Just a comment for space between methods :)
   */
  async createNewAccount(props: UserCredentials) {
    console.log('In service');
    const user = await this._repo.registerNewUser({
      name: props.name,
      email: props.email,
      password: props.password,
    });
    return user;
  }

  /**
   * Nothing Special. Just a comment for space between methods :)
   */
}

export default AuthService;
