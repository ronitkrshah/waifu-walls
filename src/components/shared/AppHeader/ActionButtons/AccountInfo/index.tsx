import {Appbar} from 'react-native-paper';
import {THeaderNavigationProp} from '../..';

function AccountInfo({navigation}: THeaderNavigationProp) {
  function handlePress() {
    navigation.navigate('Settings');
  }

  return <Appbar.Action icon={'account-cog'} onPress={handlePress} />;
}

export default AccountInfo;
