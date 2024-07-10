import {appwriteConfig} from '@app/conf/conf';
import AppwriteService from './AppwriteService';
import {Query} from 'react-native-appwrite';

/**
 * @class AppAccessService
 * @classdesc Provides methods that help to control app features from database
 * @extends AppwriteService
 */
class AppAccessService extends AppwriteService {
  /**
   * @async
   * @method canUploadImages
   *
   * @description Upload Image to storage
   * @returns {Promise<boolean>}
   * @throws {AppwriteException}
   */
  async canUploadImages(): Promise<boolean> {
    try {
      const resp = await this.database.getDocument(
        appwriteConfig.databaseId,
        appwriteConfig.accessCollectionId,
        appwriteConfig.accessDocumentId,
        [Query.select(['canUploadImages'])],
      );

      return resp.canUploadImages;
    } catch (e) {
      console.log('Appwrite Exception :: canUploadImages() ::', e);
      return false;
    }
  }
}

const appAccessService = new AppAccessService();
export default appAccessService;
