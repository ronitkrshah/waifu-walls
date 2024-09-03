/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

export interface INewUserDocumentDto {
  name: string;
  email: string;
  user_id: string;
  $id: string;
  $permissions: string[];
  $createdAt: string;
  $updatedAt: string;
  $tenant: string;
  $databaseId: string;
  $collectionId: string;
}
