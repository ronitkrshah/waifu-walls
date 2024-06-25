import {storageService} from '@app/appwrite/StorageService';
import {GlobalStoreRootState} from '@app/store/store';
import {TUseNavigation} from '@app/types/navigation';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {ToastAndroid} from 'react-native';
import {Image} from 'react-native-compressor';
import {Button} from 'react-native-paper';
import {useSelector} from 'react-redux';

type Props = {
  getData: () => {
    imagePath: string;
    imageTitle: string;
  };
};

function UploadButton({getData}: Props) {
  const userId = useSelector(
    (state: GlobalStoreRootState) => state.user.user?.userId,
  );
  const navigation = useNavigation<TUseNavigation>();

  const [loading, setLoading] = useState(false);

  async function handleUpload() {
    const {imagePath, imageTitle} = getData();

    if (!imagePath) {
      ToastAndroid.show('No Image Selected!', ToastAndroid.SHORT);
      return;
    } else if (!imageTitle) {
      ToastAndroid.show('Enter Image Title', ToastAndroid.SHORT);
      return;
    }

    setLoading(true);
    try {
      // compressing image
      const compressedImagePath = await Image.compress(imagePath, {
        disablePngTransparency: true,
      });

      await storageService.uploadMobileWallpaper({
        uri: compressedImagePath,
        title: imageTitle,
        userId: userId!,
      });
      navigation.goBack();
    } catch (e) {
      // ... ignore
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
      {loading ? 'Uploading...' : 'Upload'}
    </Button>
  );
}

export default UploadButton;
