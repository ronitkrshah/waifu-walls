import {TWallpaper} from '@app/types/wallpaper';
import ImageItem from './ImageItem';
import {FlashList} from '@shopify/flash-list';

type Props = {
  data: TWallpaper[];
};

function ImageList({data}: Props) {
  return (
    <FlashList
      data={data}
      numColumns={2}
      estimatedItemSize={10}
      renderItem={({item}) => <ImageItem wallpaper={item} />}
    />
  );
}

export default ImageList;
