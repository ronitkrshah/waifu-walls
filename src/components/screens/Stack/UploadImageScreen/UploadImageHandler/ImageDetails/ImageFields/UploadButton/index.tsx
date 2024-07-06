import {storageService} from '@app/appwrite/StorageService';
import {GlobalStoreRootState} from '@app/store/store';
import {TUseNavigation} from '@app/types/navigation';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {ToastAndroid} from 'react-native';
import {Image} from 'react-native-compressor';
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
    const {
      imageTitle,
      uri: originalImagePath,
      fileSize: imageSizeInBytes,
    } = getData();
    if (!originalImagePath || !imageTitle) {
      return;
    }
    setLoading(true);
    try {
      // compressing image
      const compressedImagePath = await Image.compress(originalImagePath, {
        disablePngTransparency: true,
      });

      await storageService.uploadMobileWallpaper({
        uri: compressedImagePath,
        title: imageTitle,
        userId: userId!,
        size: imageSizeInBytes!,
      });
      navigation.goBack();
    } catch (e) {
      ToastAndroid.show((e as Error).message, ToastAndroid.SHORT);
    } finally {
      setLoading(false);
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
