interface Details {
  $id: string;
  $tenant: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  $databaseId: string;
  $collectionId: string;
}

export interface TWallpaper extends Details {
  title: string;
  imageId: string;
  previewUrl: string;
  downloadUrl: string;
  uploadedBy: TDBUser;
}

export interface TDBUser extends Details {
  email: string;
  name: string;
  userId: string;
  role: string;
}
