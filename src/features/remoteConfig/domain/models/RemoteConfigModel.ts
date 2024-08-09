/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

type RemoteConfigModel = {
  version: string;
  $id: string;
  $tenant: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: Array<string>;
  $databaseId: string;
  $collectionId: string;
};

export default RemoteConfigModel;
