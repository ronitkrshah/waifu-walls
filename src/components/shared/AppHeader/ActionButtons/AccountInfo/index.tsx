import {Appbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {TUseNavigation} from '@app/types/navigation';

function AccountInfo() {
  const navigation = useNavigation<TUseNavigation>();

  function handlePress() {
    navigation.navigate('Settings');
  }

  return (
    <>
      <Appbar.Action icon={'account-cog'} onPress={handlePress} />
    </>
  );
}

export default AccountInfo;
