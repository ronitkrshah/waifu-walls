import EmptyFlatlistComponent from '@app/components/shared/EmptyFlatlistComponent';
import ImageItem from '@app/components/shared/ImageItem';
import usePagination, {
  UsePaginationPaginationType,
} from '@app/hooks/usePagination';
import {FlashList} from '@shopify/flash-list';
import {memo} from 'react';
import {RefreshControl} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

function ShowWallpapers() {
  const {data, refreshData, refreshing, loadMoreData, loading} = usePagination({
    paginationType: UsePaginationPaginationType.Latest,
  });

  return (
    <FlashList
      data={data}
      numColumns={2}
      estimatedItemSize={14}
      onEndReached={loadMoreData}
      onEndReachedThreshold={0.2}
      ListEmptyComponent={
        <EmptyFlatlistComponent loading={loading} text="Nothing To Show!" />
      }
      ListFooterComponent={<ActivityIndicator animating={loading} />}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={refreshData} />
      }
      renderItem={({item}) => <ImageItem wallpaper={item} />}
    />
  );
}

export default memo(ShowWallpapers);
