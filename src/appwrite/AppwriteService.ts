/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {DefaultStrings} from '@core/constants';
import {EnviromentVariables} from '@core/enviroment';
import {
  Account,
  Client,
  Databases,
  Storage,
  Teams,
} from 'react-native-appwrite';

class AppwriteService {
  private static _instance: AppwriteService;

  private client: Client;
  public account: Account;
  public database: Databases;
  public storage: Storage;
  public teams: Teams;

  private constructor() {
    this.client = new Client()
      .setProject(EnviromentVariables.APPWRITE_PROJECT_ID)
      .setEndpoint(EnviromentVariables.APPWRITE_PROJECT_URL)
      .setPlatform(DefaultStrings.PACKAGE_NAME);

    this.account = new Account(this.client);
    this.database = new Databases(this.client);
    this.storage = new Storage(this.client);
    this.teams = new Teams(this.client);
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
