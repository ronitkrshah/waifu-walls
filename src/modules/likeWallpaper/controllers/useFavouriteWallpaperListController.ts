/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import useGlobalStore from '@app/store';
import {WallpaperFeature} from '@app/modules';
import {
  BottomTabNavigationProp,
  BottomTabNavigationRoutes,
  StackNavigationRoutes,
} from '@app/types/navigation';
import {useNavigation} from '@react-navigation/native';

function useFavouriteWallpaperListController() {
  const list = useGlobalStore(state => state.likedWallpapers);
  const navigation =
    useNavigation<
      BottomTabNavigationProp<BottomTabNavigationRoutes.FVAOURITES>
    >();

  /**
   * Function To handle on press on waifus
   */
  function handleWallpaperPress(wallpaper: WallpaperFeature.WallpaperList.IWallpaper) {
    navigation.push(StackNavigationRoutes.WALLPAPER_PREVIEW_SCREEN, {
      wallpaper,
    });
  }

  return {
    wallpaperList: list,
    handleWallpaperPress,
  };
}

export default useFavouriteWallpaperListController;
