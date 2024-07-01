type SetType = 'both' | 'system' | 'lock';
import RTNDeviceWallpaper from 'react-native-device-wallpaper-manager/js/NativeDeviceWallpaper';

export function setWallpaper(path?: string, setType: SetType = 'system') {
  if (!path) {
    return;
  }
  RTNDeviceWallpaper?.setWallpaper(path, setType).catch(() => {});
}
