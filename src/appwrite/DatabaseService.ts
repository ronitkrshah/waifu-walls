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

/**
 * @class DatabaseService
 * @classdesc Provides methods for database operations
 * @extends AppwriteService
 */
class DatabaseService extends AppwriteService {
  /**
   * @async
   * @method createUser
   *
   * @param {TDBCreateUser} user
   * @param {string} user.email - User Email
   * @param {string} user.password - User Password
   * @param {string} user.name - User Name
   *
   * @description Create a new user document in database
   * @throws {AppwriteException}
   */
  async createUser(user: TDBCreateUser) {
    const {name, email, userId} = user;
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

  /**
   * @async
   * @method getUserFromDatabase
   *
   * @param {string} id - User ID
   *
   * @description Get user document from database
   * @throws {AppwriteException}
   */
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

  /**
   * @async
   * @method createImageCollection
   *
   * @param {TImageCollection} image
   * @param {string} image.imageId - Unique image id
   * @param {string} image.title - Image Title
   * @param {string} image.userId - UserId for author
   *
   * @description Create a new image document in database
   * @throws {AppwriteException}
   */
  async createImageCollection(image: TImageCollection) {
    const {imageId, title, userId} = image;
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

  /**
   * @async
   * @method getWallpapers
   *
   * @param {TGetWallpapers} props
   * @param {GetWallpapersType.Latest | GetWallpapersType.Search} props.type - Request type
   * @param {string} props.query - Query
   *
   * @description Get List of Wallpapers
   * @throws {AppwriteException}
   */
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
