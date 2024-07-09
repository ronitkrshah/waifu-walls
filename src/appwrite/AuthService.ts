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

class AuthService extends AppwriteService {
  async createAccount({password, email, name}: TUserCredentials) {
    try {
      const user = await this.account.create(ID.unique(), email, password);
      await this.loginUser({email, password});
      await databaseService.createUser({email, name: name!, userId: user.$id});
      return user;
    } catch (e) {
      console.log('Appwrite Exception : createAccount() :', e);
      throw e;
    }
  }

  async loginUser({password, email}: TUserCredentials) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (e) {
      console.log('Appwrite Exception : loginUser() :', e);
      throw e;
    }
  }

  async logoutUser() {
    try {
      await this.account.deleteSession('current');
    } catch (e) {
      console.log('Appwrite Exception : logOut() :', e);
      throw e;
    }
  }

  async getCurrentUser(queries?: string[]) {
    try {
      const user = await this.account.get();
      return await this.getUserAccountInformation(user.$id, queries);
    } catch (e) {
      console.log('Appwrite Exception : getCurrentUser() :', e);
      throw e;
    }
  }

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
