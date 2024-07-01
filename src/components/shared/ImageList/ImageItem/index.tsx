import {TUseNavigation} from '@app/types/navigation';
import {TWallpaper} from '@app/types/wallpaper';
import {useNavigation} from '@react-navigation/native';
import {Pressable, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import UploadedUser from './UploadedUser';

type Props = {
  wallpaper: TWallpaper;
};

function ImageItem({wallpaper}: Props) {
  const navigation = useNavigation<TUseNavigation>();

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
        height={400}
        width={180}
        resizeMode="cover"
        sharedTransitionTag={`${wallpaper.imageId}`}
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
