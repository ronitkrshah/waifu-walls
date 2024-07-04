interface IDetails {
  $id: string;
  $tenant: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  $databaseId: string;
  $collectionId: string;
}

interface IWallpaper extends IDetails {
  title: string;
  imageId: string;
  previewUrl: string;
  downloadUrl: string;
}

export interface IDatabaseWallpaper extends IWallpaper {
  uploadedBy: IDatabaseUser;
}

export interface IDatabaseUser extends IDetails {
  email: string;
  name: string;
  userId: string;
  role: string;
  wallpapers: IWallpaper[];
}
