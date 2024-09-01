/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import RTNDeviceWallpaper from 'react-native-device-wallpaper-manager/js/NativeDeviceWallpaper';

export const enum SetWallpaperDestination {
  SYSTEM = 'system',
  BOTH = 'both',
  LOCK = 'lock',
}

async function setWallpaper(
  path: string,
  destination: SetWallpaperDestination,
) {
  await RTNDeviceWallpaper?.setWallpaper(path, destination);
}

export default setWallpaper;
