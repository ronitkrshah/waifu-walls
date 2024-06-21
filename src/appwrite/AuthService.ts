import {ID} from 'react-native-appwrite';
import AppwriteService from './AppwriteService';

export type TUserCredentials = {
  email: string;
  password: string;
};

class AuthService extends AppwriteService {
  async createAccount({password, email}: TUserCredentials) {
    try {
      return await this.account.create(ID.unique(), email, password);
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

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (e) {
      console.log('Appwrite Exception : getCurrentUser() :', e);
      throw e;
    }
  }
}

export const authService = new AuthService();
