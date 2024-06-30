import {TListWallpaper} from '@app/types/wallpaper';
import {FlatList, StyleSheet} from 'react-native';
import ImageItem from './ImageItem';

type Props = {
  data: TListWallpaper[];
};

function ImageList({data}: Props) {
  console.log('rendering');

  return (
    <FlatList
      data={data}
      style={styles.flatlist}
      contentContainerStyle={styles.container}
      columnWrapperStyle={styles.columnStyle}
      numColumns={2}
      renderItem={({item}) => <ImageItem url={item.previewUrl} />}
    />
  );
}

const styles = StyleSheet.create({
  flatlist: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    gap: 10,
  },
  columnStyle: {
    gap: 10,
  },
});

export default ImageList;
