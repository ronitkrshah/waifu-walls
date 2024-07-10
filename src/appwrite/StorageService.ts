import {appwriteConfig} from '@app/conf/conf';
import AppwriteService from './AppwriteService';
import {ID} from 'react-native-appwrite';
import {databaseService} from './DatabaseService';

export type TUploadImageProps = {
  uri: string;
  title: string;
  userId: string;
  size: number;
};

/**
 * @class StorageService
 * @classdesc Provides methods for storing and retriveing files from storage
 * @extends AppwriteService
 */
class StorageService extends AppwriteService {
  /**
   * @async
   * @method uploadMobileWallpaper
   *
   * @param {TUploadImageProps} props
   * @param {string} props.title - Image Title
   * @param {string} props.userId - User Id for author
   * @param {string} props.uri - Local path of the image
   * @param {number} props.size - Image Size
   *
   * @description Upload Image to storage
   * @throws {AppwriteException}
   */
  async uploadMobileWallpaper(props: TUploadImageProps) {
    const {title, userId, uri, size} = props;
    try {
      const resp = await this.storage.createFile(
        appwriteConfig.wallpapersBucketId,
        ID.unique(),
        {
          type: 'image/jpeg',
          name: title,
          uri,
          size,
        },
      );
      await databaseService.createImageCollection({
        userId,
        title,
        imageId: resp.$id,
      });
    } catch (e) {
      console.log('Appwrite Exception :: uploadImage() ::', e);
      throw e;
    }
  }
}

export const storageService = new StorageService();
