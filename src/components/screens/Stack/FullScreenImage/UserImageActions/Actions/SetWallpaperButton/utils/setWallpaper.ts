type SetType = 'both' | 'system' | 'lock';
import RTNDeviceWallpaper from 'react-native-device-wallpaper-manager/js/NativeDeviceWallpaper';

export async function setWallpaper(path?: string, setType: SetType = 'system') {
  if (!path) {
    return;
  }
  try {
    await RTNDeviceWallpaper?.setWallpaper(path, setType);
  } catch (e) {}
}
