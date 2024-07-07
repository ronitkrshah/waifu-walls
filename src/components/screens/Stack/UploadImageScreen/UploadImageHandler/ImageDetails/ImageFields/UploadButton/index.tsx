import {storageService} from '@app/appwrite/StorageService';
import {GlobalStoreRootState} from '@app/store/store';
import {TUseNavigation} from '@app/types/navigation';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Image, ToastAndroid} from 'react-native';
import {Image as ImageCommpressor} from 'react-native-compressor';
import {Asset} from 'react-native-image-picker';
import {Button} from 'react-native-paper';
import {useSelector} from 'react-redux';

type Props = {
  getData: () => Asset & {imageTitle: string};
};

function UploadButton({getData}: Props) {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<TUseNavigation>();
  const userId = useSelector(
    (state: GlobalStoreRootState) => state.user.user?.userId,
  );

  async function handleUpload() {
    const {imageTitle, uri: originalImagePath} = getData();
    if (!originalImagePath || !imageTitle) {
      return;
    }
    setLoading(true);
    try {
      // compressing image
      const compressedImagePath = await ImageCommpressor.compress(
        originalImagePath,
        {
          disablePngTransparency: true,
        },
      );

      Image.getSize(
        compressedImagePath,
        (size) => {
          console.log('Image Size:', size);
          storageService
            .uploadMobileWallpaper({
              uri: compressedImagePath,
              title: imageTitle,
              userId: userId!,
              size,
            })
            .catch((e) => {
              throw e;
            })
            .finally(() => {
              setLoading(false);
              navigation.goBack();
            });
        },
        () => {},
      );
    } catch (e) {
      ToastAndroid.show('Upload Failed!', ToastAndroid.SHORT);
    }
  }

  return (
    <Button
      mode="contained"
      loading={loading}
      disabled={loading}
      onPress={handleUpload}>
      {loading ? 'Uploading' : 'Upload'}
    </Button>
  );
}

export default UploadButton;
