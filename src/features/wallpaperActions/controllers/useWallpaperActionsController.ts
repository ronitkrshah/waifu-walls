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
import * as FileSystem from '@dr.pogodin/react-native-fs';

type Props = {
  wallpaper: Wallpaper;
};

function useWallpaperActionsController({wallpaper}: Props) {
  const [isApplyingWallaper, setIsApplyingWallpaper] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

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

  /** Function To Download Wallpaper */
  function downloadWallpaper() {
    setIsDownloading(true);

    FileSystem.downloadFile({
      fromUrl: wallpaper.download_url,
      toFile: `${FileSystem.PicturesDirectoryPath}/${wallpaper.title}.jpg`,
    })
      .promise.then(() => {
        ToastAndroid.show('Wallpaper Downloaded', ToastAndroid.SHORT);
      })
      .catch(() => {
        ToastAndroid.show('Error Downloading Wallpaper', ToastAndroid.SHORT);
      })
      .finally(() => {
        setIsDownloading(false);
      });
  }

  return {
    isApplyingWallaper,
    isDownloading,
    applyWallpaper,
    downloadWallpaper,
  };
}

export default useWallpaperActionsController;
