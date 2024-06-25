import {GlobalStoreRootState} from '@app/store/store';
import {TUseNavigation} from '@app/types/navigation';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';
import {useSelector} from 'react-redux';

function UploadImageFAB() {
  const user = useSelector((state: GlobalStoreRootState) => state.user.user);
  const navigation = useNavigation<TUseNavigation>();

  function handlePress() {
    navigation.navigate('UploadImage');
  }

  return (
    user && (
      <FAB style={styles.fab} icon={'file-upload'} onPress={handlePress} />
    )
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
});

export default UploadImageFAB;
