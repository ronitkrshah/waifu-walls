import {StyleSheet, View} from 'react-native';
import DownloadButton from './Actions/DownloadButton';
import SetWallpaperButton from './Actions/SetWallpaperButton';

function UserImageActions() {
  return (
    <View style={styles.container}>
      <DownloadButton />
      <SetWallpaperButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    transform: [{translateY: 40}],
  },
});

export default UserImageActions;
