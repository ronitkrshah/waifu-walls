import EmptyFlatlistComponent from '@app/components/shared/EmptyFlatlistComponent';
import ImageItem from '@app/components/shared/ImageItem';
import usePagination from '@app/hooks/usePagination';
import {FlashList} from '@shopify/flash-list';
import {RefreshControl} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

function ShowWallpapers() {
  const {data, handleRefresh, refreshing, loadMore, loading} = usePagination();

  return (
    <FlashList
      data={data}
      numColumns={2}
      estimatedItemSize={14}
      onEndReached={loadMore}
      onEndReachedThreshold={0.1}
      ListEmptyComponent={
        <EmptyFlatlistComponent loading={loading} text="Nothing To Show!" />
      }
      ListFooterComponent={<ActivityIndicator animating={loading} />}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
      renderItem={({item}) => <ImageItem wallpaper={item} />}
    />
  );
}

export default ShowWallpapers;
