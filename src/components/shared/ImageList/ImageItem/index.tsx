import {TUseNavigation} from '@app/types/navigation';
import {TWallpaper} from '@app/types/wallpaper';
import {useNavigation} from '@react-navigation/native';
import {Dimensions, Pressable, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import UploadedUser from './UploadedUser';
import {useSelector} from 'react-redux';
import {GlobalStoreRootState} from '@app/store/store';

type Props = {
  wallpaper: TWallpaper;
};

const {height: TOTAL_HEIGHT, width: TOTAL_WIDTH} = Dimensions.get('window');

function ImageItem({wallpaper}: Props) {
  const navigation = useNavigation<TUseNavigation>();
  const isTransitionEnabled = useSelector(
    (state: GlobalStoreRootState) =>
      state.settings.unstableSettings.wallpaperTransition,
  );

  function onPress() {
    navigation.navigate('FullScreenImage', {
      previewUrl: wallpaper.previewUrl,
      downloadUrl: wallpaper.downloadUrl,
      imageId: wallpaper.imageId,
    });
  }

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Animated.Image
        style={styles.image}
        source={{uri: wallpaper.previewUrl}}
        height={TOTAL_HEIGHT / 2}
        width={TOTAL_WIDTH / 2 - 10}
        resizeMode="cover"
        sharedTransitionTag={
          isTransitionEnabled ? wallpaper.imageId : undefined
        }
      />
      <UploadedUser user={wallpaper.uploadedBy} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 'auto',
  },
  image: {
    borderRadius: 20,
  },
});

export default ImageItem;
