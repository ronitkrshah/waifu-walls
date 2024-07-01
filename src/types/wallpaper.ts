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
  uploadedBy: UploadedBy;
}

interface UploadedBy extends Details {
  email: string;
  name: string;
  userId: string;
  role: string;
  avatarUrl: string;
}
