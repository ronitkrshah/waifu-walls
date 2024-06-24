import {appwriteConfig} from '@app/conf/conf';
import {Account, Client, Databases} from 'react-native-appwrite';

class AppwriteService {
  protected account: Account;
  protected client: Client;
  protected database: Databases;

  constructor() {
    this.client = new Client()
      .setEndpoint(appwriteConfig.endpointUrl)
      .setProject(appwriteConfig.projectId);

    this.account = new Account(this.client);
    this.database = new Databases(this.client);
  }
}

export default AppwriteService;
