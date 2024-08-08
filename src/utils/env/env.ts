/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Config from 'react-native-config';

export const env = {
  APPWRITE_PROJECT_URL: Config.APPWRITE_PROJECT_URL!,
  APPWRITE_PROJECT_ID: Config.APPWRITE_PROJECT_ID!,
  APPWRITE_DATABASE_ID: Config.APPWRITE_DATABASE_ID!,
  APPWRITE_USERS_COLLECTION_ID: Config.APPWRITE_USERS_COLLECTION_ID!,
  APPWRITE_REMOTE_CONFIG_COLLECTION_ID:
    Config.APPWRITE_REMOTE_CONFIG_COLLECTION_ID,
  APPWRITE_WALLPAPERS_COLLECTION_ID: Config.APPWRITE_WALLPAPERS_COLLECTION_ID,
  APPWRITE_ADMIN_TEAMS_ID: Config.APPWRITE_ADMIN_TEAMS_ID,
};