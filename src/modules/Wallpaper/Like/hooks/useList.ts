/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {useGlobalStore} from '@core/store';
import {
  BottomTabNavigationProp,
  BottomTabNavigationRoutes,
  StackNavigationRoutes,
} from '@app/navigation/types';
import {useNavigation} from '@react-navigation/native';
import {IWallpaper} from '@core/interfaces';

function useList() {
  const list = useGlobalStore(state => state.likedWallpapers);
  const navigation =
    useNavigation<
      BottomTabNavigationProp<BottomTabNavigationRoutes.FVAOURITES>
    >();

  /**
   * Function To handle on press on waifus
   */
  function handleWallpaperPress(wallpaper: IWallpaper) {
    navigation.push(StackNavigationRoutes.WALLPAPER_PREVIEW_SCREEN, {
      wallpaper,
    });
  }

  return {
    wallpaperList: list,
    handleWallpaperPress,
  };
}

export default useList;
