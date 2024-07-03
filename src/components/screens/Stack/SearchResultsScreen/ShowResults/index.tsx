import usePagination from '@app/hooks/usePagination';
import {FlashList} from '@shopify/flash-list';
import {RefreshControl} from 'react-native';
import ImageItem from '@app/components/shared/ImageItem';
import {ActivityIndicator, Text} from 'react-native-paper';
import EmptyFlatlistComponent from '@app/components/shared/EmptyFlatlistComponent';

type Props = {
  query: string;
};

function ShowResults({query}: Props) {
  const {data, handleRefresh, refreshing, loadMore, loading} = usePagination(
    'SEARCH',
    query,
  );

  return (
    <FlashList
      data={data}
      numColumns={2}
      estimatedItemSize={14}
      onEndReached={loadMore}
      onEndReachedThreshold={0.1}
      ListEmptyComponent={
        <EmptyFlatlistComponent
          loading={loading}
          text="Oops! No Results Found"
        />
      }
      ListFooterComponent={<ActivityIndicator animating={loading} />}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
      renderItem={({item}) => <ImageItem wallpaper={item} />}
    />
  );
}

export default ShowResults;
