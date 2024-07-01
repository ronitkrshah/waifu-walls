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

class StorageService extends AppwriteService {
  async uploadMobileWallpaper({
    title,
    userId: userid,
    uri,
    size,
  }: TUploadImageProps) {
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
        userId: userid,
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
