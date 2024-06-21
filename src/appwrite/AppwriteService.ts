import {appwriteConfig} from '@app/conf/conf';
import {Account, Client} from 'react-native-appwrite';

class AppwriteService {
  protected account: Account;
  protected client: Client;

  constructor() {
    this.client = new Client()
      .setEndpoint(appwriteConfig.endpointUrl)
      .setProject(appwriteConfig.projectId);

    this.account = new Account(this.client);
  }
}

export default AppwriteService;
