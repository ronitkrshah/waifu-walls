import {appwriteConfig} from '@app/conf/conf';
import AppwriteService from './AppwriteService';
import {ID} from 'react-native-appwrite';
import {databaseService} from './DatabaseService';

export type TUploadImageProps = {
  uri: string;
  title: string;
  userId: string;
};

class StorageService extends AppwriteService {
  async uploadMobileWallpaper({title, userId: userid, uri}: TUploadImageProps) {
    try {
      const resp = await this.storage.createFile(
        appwriteConfig.wallpapersBucketId,
        ID.unique(),
        {
          type: 'image/jpeg',
          name: title,
          uri,
          /**
           * I don't have any idea about the size value. Maybe it will be the
           * size of the image in bytes.
           *
           * TODO: Generate base64 Image blob and get that size
           */
          size: 50,
        },
      );
      await databaseService.createImageCollection({
        userId: userid,
        title,
        imageId: resp.$id,
      });
    } catch (e) {
      console.log('Appwrite Exception :: uploadImage() ::', e);
    }
  }
}

export const storageService = new StorageService();
