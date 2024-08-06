/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {useInfiniteQuery} from '@tanstack/react-query';
import LatestWallpaperFeatureService from '../services/WallpaperFeatureService';
import {useNavigation} from '@react-navigation/native';
import {
  BottomTabNavigationProp,
  BottomTabNavigationRoutes,
  StackNavigationRoutes,
} from '@app/types/navigation';
import LatestWallpaperRepositoryImpl from '../repositories/LatestWallpaperRepositoryImpl';
import {WallpaperResponseData} from '@app/types/api/wallpaper';

function useLatestWallpaperFeatureController() {
  const wallpaperService = new LatestWallpaperFeatureService(
    new LatestWallpaperRepositoryImpl(),
  );
  const wallpaperListQuery = useInfiniteQuery({
    queryKey: ['latestWallpaper'],
    queryFn: ({pageParam}) => wallpaperService.getLatestWallpapers(pageParam),
    initialPageParam: 0,
    getNextPageParam: lastPage => lastPage.hasNextPage,
  });

  /** Wallpaper List */
  const navigation =
    useNavigation<BottomTabNavigationProp<BottomTabNavigationRoutes.WAIFUS>>();

  /**
   * Function To handle on press on waifus
   */
  function handleWallpaperPress(wallpaper: WallpaperResponseData) {
    navigation.push(StackNavigationRoutes.WALLPAPER_PREVIEW_SCREEN, {
      wallpaper,
    });
  }

  return {
    isLoading: wallpaperListQuery.isLoading,
    wallpaperList: wallpaperListQuery.data?.pages.flatMap(
      page => page.wallpaperDetails,
    ),
    isFetchingMore: wallpaperListQuery.isFetchingNextPage,
    fetchMore: wallpaperListQuery.fetchNextPage,
    handleWallpaperPress,
  };
}

export default useLatestWallpaperFeatureController;
