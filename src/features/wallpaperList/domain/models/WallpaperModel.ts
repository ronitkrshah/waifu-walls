/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

type WallpaperModel = {
  currentOffset: number;
  hasNextPage?: number | null;
  total: number;
  data: Array<ActualData>;
};

type ActualData = {
  title: string;
  preview_url: string;
  download_url: string;
  original_author: string;
  original_post_link: string;
  is_nsfw: boolean;
  image_id: string;
  tags: Array<string>;
  $id: string;
  $tenant: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: Array<string>;
  uploaded_by: {
    name: string;
    email: string;
    user_id: string;
    $id: string;
    $tenant: string;
    $createdAt: string;
    $updatedAt: string;
    $permissions: Array<string>;
    $databaseId: string;
    $collectionId: string;
  };
  $databaseId: string;
  $collectionId: string;
};

export default WallpaperModel;
