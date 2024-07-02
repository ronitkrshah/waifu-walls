import {databaseService} from '@app/appwrite/DatabaseService';
import {TWallpaper} from '@app/types/wallpaper';
import {useCallback, useEffect, useState} from 'react';
import {Query} from 'react-native-appwrite';

export default function usePagination() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<TWallpaper[]>([]);
  const [totalItems, setTotalItems] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  async function fetchWallpapers(offset = 0) {
    try {
      const response = await databaseService.getHomeScreenWallpapers(14, [
        Query.offset(offset),
      ]);

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
      setLoadingMore(false);
    }
  }

  useEffect(() => {
    fetchWallpapers();
  }, []);

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    fetchWallpapers(0);
  }, []);

  const loadMore = () => {
    if (!loadingMore) {
      if (data.length < totalItems) {
        setLoadingMore(true);
        fetchWallpapers(data.length);
      }
    }
  };

  return {
    data,
    totalItems,
    refreshing,
    loadingMore,
    loading,
    handleRefresh,
    loadMore,
  };
}
