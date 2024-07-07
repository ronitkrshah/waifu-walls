import {appwriteConfig} from '@app/conf/conf';
import AppwriteService from './AppwriteService';
import {ID, Query} from 'react-native-appwrite';
import {IDatabaseWallpaper} from '@app/types/wallpaper';

export enum GetWallpapersType {
  Search,
  Latest,
}

type SearchProps = {
  type: GetWallpapersType.Search;
  query: string;
};

type LatesProps = {
  type: GetWallpapersType.Latest;
};

type TGetWallpapers = {
  offset: number;
} & (SearchProps | LatesProps);

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

export type TWallpaperDataResponse = {
  totalItems: number;
  data: IDatabaseWallpaper[];
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

  async getWallpapers(props: TGetWallpapers): Promise<TWallpaperDataResponse> {
    let databaseResponse: TWallpaperDataResponse;
    try {
      const query = [
        Query.orderDesc('$createdAt'),
        Query.limit(20),
        Query.offset(props.offset),
      ];

      if (props.type === GetWallpapersType.Latest) {
        const data = await this.database.listDocuments(
          appwriteConfig.databaseId,
          appwriteConfig.wallpaperCollectionId,
          query,
        );
        databaseResponse = {
          totalItems: data.total,
          data: data.documents as IDatabaseWallpaper[],
        };
      } else {
        const data = await this.database.listDocuments(
          appwriteConfig.databaseId,
          appwriteConfig.wallpaperCollectionId,
          [...query, Query.search('title', props.query)],
        );
        databaseResponse = {
          totalItems: data.total,
          data: data.documents as IDatabaseWallpaper[],
        };
      }

      return databaseResponse;
    } catch (e) {
      console.log('Appwrite Exception :: getWallpapers() ::', e);
      throw e;
    }
  }
}

export const databaseService = new DatabaseService();
