import {TUseNavigation} from '@app/types/navigation';
import {IDatabaseWallpaper} from '@app/types/wallpaper';
import {useNavigation} from '@react-navigation/native';
import {Pressable, StyleSheet} from 'react-native';
import UploadedUser from './UploadedUser';
import ActualImage from './ActualImage';
import {memo} from 'react';

type Props = {
  wallpaper: IDatabaseWallpaper;
};

function ImageItem({wallpaper}: Props) {
  const navigation = useNavigation<TUseNavigation>();

  function onPress() {
    navigation.navigate('FullScreenImage', {wallpaper});
  }

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <ActualImage wallpaper={wallpaper} />
      <UploadedUser user={wallpaper.uploadedBy} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 20,
    marginHorizontal: 'auto',
  },
});

export default memo(ImageItem);
