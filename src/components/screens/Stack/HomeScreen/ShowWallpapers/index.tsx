import ImageItem from '@app/components/shared/ImageItem';
import usePagination from '@app/hooks/usePagination';
import {FlashList} from '@shopify/flash-list';
import {RefreshControl} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

function ShowWallpapers() {
  const {data, handleRefresh, loadingMore, refreshing, loadMore} =
    usePagination();

  return (
    <FlashList
      data={data}
      numColumns={2}
      estimatedItemSize={14}
      onEndReached={loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={<RenderFooter loading={loadingMore} />}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
      renderItem={({item}) => <ImageItem wallpaper={item} />}
    />
  );
}

const RenderFooter = ({loading = false}) => {
  return loading ? <ActivityIndicator animating size={'large'} /> : null;
};

export default ShowWallpapers;
