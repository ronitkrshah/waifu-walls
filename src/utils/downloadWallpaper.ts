import * as FileSystem from '@dr.pogodin/react-native-fs';

export async function downloadWallpaper(url: string) {
  const fileName = `${FileSystem.DownloadDirectoryPath}/${Date.now()}.jpg`;

  try {
    const resp = await FileSystem.downloadFile({
      fromUrl: url,
      toFile: fileName,
    }).promise;

    return {
      code: resp.statusCode,
      fileName,
    };
  } catch (e) {}
}
