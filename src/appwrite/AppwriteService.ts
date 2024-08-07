/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {DefaultStrings} from '@app/utils/constants/strings';
import {env} from '@app/utils/env/env';
import {Account, Client, Databases} from 'react-native-appwrite';

class AppwriteService {
  private static _instance: AppwriteService;

  private client: Client;
  public account: Account;
  public database: Databases;

  private constructor() {
    this.client = new Client()
      .setProject(env.APPWRITE_PROJECT_ID)
      .setEndpoint(env.APPWRITE_PROJECT_URL)
      .setPlatform(DefaultStrings.PACKAGE_NAME);

    this.account = new Account(this.client);
    this.database = new Databases(this.client);
  }

  public static getInstance() {
    if (this._instance) {
      return this._instance;
    } else {
      this._instance = new AppwriteService();
      return this._instance;
    }
  }
}

export default AppwriteService;
