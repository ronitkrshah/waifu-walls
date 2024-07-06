import {
  TWallpaperDataResponse,
  databaseService,
} from '@app/appwrite/DatabaseService';
import {IDatabaseWallpaper} from '@app/types/wallpaper';
import {useCallback, useEffect, useState} from 'react';

export enum UsePaginationPaginationType {
  Search,
  Latest,
}

type SearchProps = {
  paginationType: UsePaginationPaginationType.Search;
  query: string;
};

type HomeScreenProps = {
  paginationType: UsePaginationPaginationType.Latest;
};

type TFetchWallpapersProps = SearchProps | HomeScreenProps;

function usePagintaion(props: TFetchWallpapersProps) {
  const [data, setData] = useState<IDatabaseWallpaper[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [totalItems, setTotalItems] = useState(0);

  const fetchWallpapers = useCallback(async (offset = 0) => {
    try {
      setLoading(true);
      let databaseResponse: TWallpaperDataResponse;

      if (props.paginationType === UsePaginationPaginationType.Search) {
        databaseResponse = await databaseService.searchWallpaper(props.query);
      } else {
        databaseResponse = await databaseService.getHomeScreenWallpapers(
          offset,
        );
      }
      setTotalItems(databaseResponse.totalItems);

      if (offset === 0) {
        setData(databaseResponse.data);
      } else {
        setData((prev) => [...prev, ...databaseResponse.data]);
      }
    } catch (e) {
      // ... ignore
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    fetchWallpapers();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const loadMoreData = () => {
    if (!loading && totalItems !== data.length) {
      fetchWallpapers(data.length);
    }
  };

  const refreshData = () => {
    if (!refreshing) {
      setRefreshing(true);
      fetchWallpapers();
    }
  };

  return {
    loading,
    data,
    loadMoreData,
    totalItems,
    refreshData,
    refreshing,
  };
}

export default usePagintaion;
