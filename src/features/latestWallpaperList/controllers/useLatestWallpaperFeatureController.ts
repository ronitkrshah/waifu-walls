/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {useQuery} from '@tanstack/react-query';
import LatestWallpaperFeatureService from '../services/WallpaperFeatureService';
import {useNavigation} from '@react-navigation/native';
import {
  BottomTabNavigationProp,
  BottomTabNavigationRoutes,
  StackNavigationProp,
} from '@app/types/navigation';

function useLatestWallpaperFeatureController() {
  const wallpaperService = new LatestWallpaperFeatureService();
  const {
    isLoading,
    data: wallpaperList,
    isError,
  } = useQuery({
    queryKey: ['latestWallpaper'],
    queryFn: () => wallpaperService.getLatestWallpapers(),
  });
  const navigation =
    useNavigation<BottomTabNavigationProp<BottomTabNavigationRoutes.WAIFUS>>();

  /**
   * Function To handle on press on waifus
   */
  function handleWallpaperPress(wallpaperId: string) {
    // ... do something later
  }

  return {
    isLoading,
    wallpaperList,
    isError,
  };
}

export default useLatestWallpaperFeatureController;
