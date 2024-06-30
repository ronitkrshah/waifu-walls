import {StyleSheet, View} from 'react-native';
import DownloadButton from './Actions/DownloadButton';

function UserImageActions() {
  return (
    <View style={styles.container}>
      <DownloadButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    transform: [{translateY: 40}],
  },
});

export default UserImageActions;
