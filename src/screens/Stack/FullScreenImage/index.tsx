import ShowFullImage from '@app/components/screens/Stack/FullScreenImage/ShowFullImage';
import UserImageActions from '@app/components/screens/Stack/FullScreenImage/UserImageActions';
import AppHeader from '@app/components/shared/AppHeader';
import {TStackNavigationScreenProps} from '@app/types/navigation';
import {ScrollView} from 'react-native';
import {StyleSheet} from 'react-native';

function FullScreenImage({
  route,
}: TStackNavigationScreenProps<'FullScreenImage'>) {
  const wallpaper = route.params.wallpaper;
  return (
    <>
      <AppHeader title="Home" showBackButton />
      <ScrollView contentContainerStyle={styles.container}>
        <ShowFullImage url={wallpaper.previewUrl} />
        <UserImageActions />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
  },
});

export default FullScreenImage;
