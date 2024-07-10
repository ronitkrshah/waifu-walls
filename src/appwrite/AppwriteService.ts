import {appwriteConfig} from '@app/conf/conf';
import {Account, Client, Databases, Storage} from 'react-native-appwrite';

/**
 * @class
 * @classdesc Provides core appwrite services access
 */
class AppwriteService {
  protected account: Account;
  protected client: Client;
  protected database: Databases;
  protected storage: Storage;

  /**
   * @constructor
   */
  constructor() {
    this.client = new Client()
      .setEndpoint(appwriteConfig.endpointUrl)
      .setProject(appwriteConfig.projectId);

    this.account = new Account(this.client);
    this.database = new Databases(this.client);
    this.storage = new Storage(this.client);
  }
}

export default AppwriteService;
