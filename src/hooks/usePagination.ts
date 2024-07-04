import {
  TWallpaperDataResponse,
  databaseService,
} from '@app/appwrite/DatabaseService';
import {IDatabaseWallpaper} from '@app/types/wallpaper';
import {useCallback, useEffect, useState} from 'react';
import {Query} from 'react-native-appwrite';

type PaginationType = 'SEARCH' | 'HOME';

export default function usePagination(
  type: PaginationType = 'HOME',
  query = '',
) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<IDatabaseWallpaper[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  const fetchWallpapers = useCallback(async function fetchWallpapers(
    offset = 0,
  ) {
    let response: TWallpaperDataResponse;
    setLoading(true);
    try {
      if (type === 'HOME') {
        response = await databaseService.getHomeScreenWallpapers(10, [
          Query.offset(offset),
        ]);
      } else {
        response = await databaseService.searchWallpaper(query);
      }

      const result = {
        wallpapers: response.data,
        items: response.data.length,
        total: response.totalItems,
      };

      if (offset === 0) {
        setData(result.wallpapers);
      } else {
        setData([...data, ...result.wallpapers]);
      }

      setTotalItems(result.total);
    } catch (e) {
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  },
  []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    fetchWallpapers();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    fetchWallpapers(0);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const loadMore = () => {
    if (!loading) {
      if (data.length < totalItems) {
        fetchWallpapers(data.length);
      }
    }
  };

  return {
    data,
    totalItems,
    refreshing,
    loading,
    handleRefresh,
    loadMore,
  };
}
