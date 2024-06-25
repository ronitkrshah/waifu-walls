import {appwriteConfig} from '@app/conf/conf';
import AppwriteService from './AppwriteService';
import {ID} from 'react-native-appwrite';

type TDBCreateUser = {
  name: string;
  email: string;
  userId: string;
};

type TImageCollection = {
  imageId: string;
  userId: string;
  title: string;
};

class DatabaseService extends AppwriteService {
  async createUser({name, email, userId}: TDBCreateUser) {
    try {
      const resp = await this.database.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        userId,
        {
          name,
          email,
          userId,
        },
      );
      return resp;
    } catch (e) {
      console.log('Appwrite Exception :: createDBUser ::', e);
      throw e;
    }
  }

  async getUserFromDatabase(id: string) {
    try {
      const data = await this.database.getDocument(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        id,
      );
      return data;
    } catch (e) {
      console.log('Appwrite Exception :: getUserFromDatabase() ::', e);
      throw e;
    }
  }

  async createImageCollection({imageId, title, userId}: TImageCollection) {
    try {
      const data = await this.database.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.wallpaperCollectionId,
        ID.unique(),
        {
          title,
          imageId,
          user: userId,
        },
      );
      return data;
    } catch (e) {
      console.log('Appwrite Exception :: createImageCollection() ::', e);
    }
  }
}

export const databaseService = new DatabaseService();
