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
  StackNavigationRoutes,
} from '@app/types/navigation';
import LatestWallpaperRepositoryImpl from '../repositories/LatestWallpaperRepositoryImpl';
import {LatestWallpaperDTO} from '../dto';

function useLatestWallpaperFeatureController() {
  const wallpaperService = new LatestWallpaperFeatureService(
    new LatestWallpaperRepositoryImpl(),
  );
  const {
    isLoading,
    data: wallpaperList,
    error,
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
  function handleWallpaperPress(wallpaper: LatestWallpaperDTO) {
    navigation.push(StackNavigationRoutes.WALLPAPER_PREVIEW_SCREEN, {
      wallpaper,
    });
  }

  return {
    isLoading,
    wallpaperList,
    isError,
    handleWallpaperPress,
  };
}

export default useLatestWallpaperFeatureController;
