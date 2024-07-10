import {ID} from 'react-native-appwrite';
import AppwriteService from './AppwriteService';
import {databaseService} from './DatabaseService';
import {appwriteConfig} from '@app/conf/conf';
import {IDatabaseUser} from '@app/types/wallpaper';

export type TUserCredentials = {
  email: string;
  password: string;
  name?: string;
};

/**
 * @class AuthService
 * @classdesc Provides methods for Authentication Service
 * @extends AppwriteService
 */
class AuthService extends AppwriteService {
  /**
   * @async
   * @method createAccount
   *
   * @param {TUserCredentials} user
   * @param {string} user.email - User Email
   * @param {string} user.password - User Password
   * @param {string} user.name - User Name
   *
   * @description Create a new user
   * @throws {AppwriteException}
   */
  async createAccount(user: TUserCredentials) {
    const {password, email, name} = user;

    try {
      const response = await this.account.create(ID.unique(), email, password);
      await this.loginUser({email, password});
      await databaseService.createUser({
        email,
        name: name!,
        userId: response.$id,
      });
      return response;
    } catch (e) {
      console.log('Appwrite Exception : createAccount() :', e);
      throw e;
    }
  }

  /**
   * @async
   * @method loginUser
   *
   * @param {TUserCredentials} user
   * @param {string} user.email - User Email
   * @param {string} user.password - User Password
   *
   * @description Login existing user
   * @throws {AppwriteException}
   */
  async loginUser(user: TUserCredentials) {
    const {email, password} = user;

    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (e) {
      console.log('Appwrite Exception : loginUser() :', e);
      throw e;
    }
  }

  /**
   * @async
   * @method logoutUser
   *
   * @description Logout a user
   * @throws {AppwriteException}
   */
  async logoutUser() {
    try {
      await this.account.deleteSession('current');
    } catch (e) {
      console.log('Appwrite Exception : logOut() :', e);
      throw e;
    }
  }

  /**
   * @async
   * @method getCurrentUser
   *
   * @param {Array<string>} queries - Custom Queries Array
   *
   * @description Get information about currently logged in user
   * @throws {AppwriteException}
   */
  async getCurrentUser(queries?: string[]) {
    try {
      const user = await this.account.get();
      return await this.getUserAccountInformation(user.$id, queries);
    } catch (e) {
      console.log('Appwrite Exception : getCurrentUser() :', e);
      throw e;
    }
  }

  /**
   * @async
   * @method getUserAccountInformation
   *
   * @param {string} userId - User ID
   * @param {Array<string>} queries - Custom Queries Array
   *
   * @description Get user account details
   * @throws {AppwriteException}
   */
  async getUserAccountInformation(userId: string, queries?: string[]) {
    try {
      return (await this.database.getDocument(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        userId,
        queries,
      )) as IDatabaseUser;
    } catch (e) {
      console.log('Appwrite Exception : getUserAccountInformation() :', e);
      throw e;
    }
  }
}

export const authService = new AuthService();
