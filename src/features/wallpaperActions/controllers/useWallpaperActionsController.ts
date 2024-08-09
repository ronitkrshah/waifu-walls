/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Wallpaper} from '@app/types/api/wallpaper';
import {useState} from 'react';
import setWallpaper, {SetWallpaperDestination} from '../utils/setWallpaper';
import {ToastAndroid} from 'react-native';

type Props = {
  wallpaper: Wallpaper;
};

function useWallpaperActionsController({wallpaper}: Props) {
  const [isApplyingWallaper, setIsApplyingWallpaper] = useState(false);

  /** Function to apply wallpaper */
  async function applyWallpaper(destination: SetWallpaperDestination) {
    try {
      setIsApplyingWallpaper(true);
      await setWallpaper(wallpaper.download_url, destination);
      ToastAndroid.show('Wallpaper Applied', ToastAndroid.SHORT);
    } catch (e) {
      ToastAndroid.show('Faild To Apply Wallpaper', ToastAndroid.SHORT);
    } finally {
      setIsApplyingWallpaper(false);
    }
  }

  return {
    isApplyingWallaper,
    applyWallpaper,
  };
}

export default useWallpaperActionsController;
