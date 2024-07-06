import usePagination, {
  UsePaginationPaginationType,
} from '@app/hooks/usePagination';
import {FlashList} from '@shopify/flash-list';
import {RefreshControl} from 'react-native';
import ImageItem from '@app/components/shared/ImageItem';
import {ActivityIndicator} from 'react-native-paper';
import EmptyFlatlistComponent from '@app/components/shared/EmptyFlatlistComponent';

type Props = {
  query: string;
};

function ShowResults({query}: Props) {
  const {data, loadMoreData, loading, refreshing, refreshData} = usePagination({
    paginationType: UsePaginationPaginationType.Search,
    query,
  });

  return (
    <FlashList
      data={data}
      numColumns={2}
      estimatedItemSize={14}
      onEndReached={loadMoreData}
      onEndReachedThreshold={0.2}
      ListEmptyComponent={
        <EmptyFlatlistComponent
          loading={loading}
          text="Oops! No Results Found"
        />
      }
      ListFooterComponent={<ActivityIndicator animating={loading} />}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={refreshData} />
      }
      renderItem={({item}) => <ImageItem wallpaper={item} />}
    />
  );
}

export default ShowResults;
