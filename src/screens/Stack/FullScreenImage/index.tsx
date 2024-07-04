import ShowFullImage from '@app/components/screens/Stack/FullScreenImage/ShowFullImage';
import UserImageActions from '@app/components/screens/Stack/FullScreenImage/UserImageActions';
import {TStackNavigationScreenProps} from '@app/types/navigation';
import {StyleSheet, View} from 'react-native';

function FullScreenImage({
  route,
}: TStackNavigationScreenProps<'FullScreenImage'>) {
  const wallpaper = route.params.wallpaper;
  return (
    <View style={styles.container}>
      <ShowFullImage url={wallpaper.previewUrl} />
      <UserImageActions />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FullScreenImage;
