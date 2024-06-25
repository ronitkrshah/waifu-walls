export const appwriteConfig = {
  projectId: process.env.APPWRITE_PROJECT_ID!,
  endpointUrl: process.env.APPWRITE_ENDPOINT_URL!,
  userCollectionId: process.env.APPWRITE_USER_COLLECTION_ID!,
  wallpaperCollectionId: process.env.APPWRITE_WALLPAPERS_COLLECTION_ID!,
  databaseId: process.env.APPWRITE_DATABASE_ID!,
  wallpapersBucketId: process.env.APPWRITE_WALLPAPER_BUCKET_ID!,
};
