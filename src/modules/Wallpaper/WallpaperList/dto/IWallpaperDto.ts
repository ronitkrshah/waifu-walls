/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

export interface IWallpaperDto {
  total: number;
  data: {
    title: string;
    preview_url: string;
    download_url: string;
    original_author: string;
    original_post_link: string;
    is_nsfw: boolean;
    image_id: string;
    tags: string[];
    $id: string;
    $tenant: string;
    $createdAt: string;
    $updatedAt: string;
    $permissions: string[];
    uploaded_by: {
      name: string;
      email: string;
      user_id: string;
      $id: string;
      $tenant: string;
      $createdAt: string;
      $updatedAt: string;
      $permissions: string[];
      $databaseId: string;
      $collectionId: string;
    };
    $databaseId: string;
    $collectionId: string;
  }[];
}
