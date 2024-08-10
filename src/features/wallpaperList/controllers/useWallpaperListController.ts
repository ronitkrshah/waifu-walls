/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {useInfiniteQuery, useQueryClient} from '@tanstack/react-query';
import WallpaperListService from '../services/WallpaperListService';
import {useNavigation} from '@react-navigation/native';
import {
  BottomTabNavigationProp,
  BottomTabNavigationRoutes,
  StackNavigationRoutes,
} from '@app/types/navigation';
import {Wallpaper} from '@app/types/api/wallpaper';
import useGlobalStore from '@app/store';
import WallpaperListRepositoryImpl from '../repositories/WallpaperListRepositoryImpl';

function useWallpaperListController(query?: string | string[]) {
  const queryClient = useQueryClient();
  const showMatureImages = useGlobalStore(
    state => state.appSettings.showMatureContent,
  );
  const wallpaperService = new WallpaperListService(
    new WallpaperListRepositoryImpl(),
  );
  const navigation =
    useNavigation<BottomTabNavigationProp<BottomTabNavigationRoutes.WAIFUS>>();

  /**
   * Infinte Scroll Of Latest Wallpapers
   */
  const wallpaperListQuery = useInfiniteQuery({
    queryKey: ['listWallpapers', query],
    queryFn: ({pageParam}) =>
      wallpaperService.getWallpapers(pageParam, showMatureImages, query),
    initialPageParam: 0,
    getNextPageParam: lastPage => lastPage.hasNextPage,
    refetchOnMount: false,
  });

  /**
   * React Query refetch function fetches all pages that are previously fetched
   * this will hit api more times. This behaviour isn't suitable for our app
   * Example: If the user is on number 10 page and then use pull-to-refresh
   * then api will hit 10 times for refresh the pages.
   */
  function refreshDataOnlyFirstPage() {
    queryClient.resetQueries({queryKey: ['listWallpapers'], exact: true});
  }

  /**
   * Function To handle on press on waifus
   */
  function handleWallpaperPress(wallpaper: Wallpaper) {
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
    refreshData: refreshDataOnlyFirstPage,
    isRefreshing: wallpaperListQuery.isRefetching,
  };
}

export default useWallpaperListController;
