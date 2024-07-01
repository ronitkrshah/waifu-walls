import {appwriteConfig} from '@app/conf/conf';
import AppwriteService from './AppwriteService';
import {ID, Query} from 'react-native-appwrite';
import {TWallpaper} from '@app/types/wallpaper';

type TDBCreateUser = {
  name: string;
  email: string;
  userId: string;
};

type TImageCollection = {
  imageId: string;
  title: string;
  userId: string;
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
          uploadedBy: userId,
          previewUrl: this.storage.getFilePreview(
            appwriteConfig.wallpapersBucketId,
            imageId,
          ),
          downloadUrl: this.storage.getFileDownload(
            appwriteConfig.wallpapersBucketId,
            imageId,
          ),
        },
      );
      return data;
    } catch (e) {
      console.log('Appwrite Exception :: createImageCollection() ::', e);
      throw e;
    }
  }

  async getHomeScreenWallpapers(): Promise<TWallpaper[]> {
    try {
      const data = await this.database.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.wallpaperCollectionId,
        [Query.orderDesc('$createdAt'), Query.limit(10)],
      );

      return data.documents as TWallpaper[];
    } catch (e) {
      console.log('Appwrite Exception :: getHomeScreenWallpapers() ::', e);
      throw e;
    }
  }
}

export const databaseService = new DatabaseService();
