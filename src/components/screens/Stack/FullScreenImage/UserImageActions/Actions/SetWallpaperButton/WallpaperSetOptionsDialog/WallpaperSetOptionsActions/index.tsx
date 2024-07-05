import {StyleSheet, View} from 'react-native';
import SetToBoth from './SetToBoth';
import SetToHome from './SetToHome';
import SetToLock from './SetToLock';

type Props = {
  url: string;
};

function WallpaperSetOptionsActions({url}: Props) {
  return (
    <View style={styles.container}>
      <SetToHome url={url} />
      <SetToLock url={url} />
      <SetToBoth url={url} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 15,
    marginTop: 10,
  },
});

export default WallpaperSetOptionsActions;
