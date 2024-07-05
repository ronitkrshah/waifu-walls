import {useState} from 'react';
import {Appbar} from 'react-native-paper';
import AccountInfoDialog from './AccountInfoDialog';
import {useNavigation} from '@react-navigation/native';
import {TUseNavigation} from '@app/types/navigation';

function AccountInfo() {
  // const [showDialog, setShowDialog] = useState(false);
  const navigation = useNavigation<TUseNavigation>();

  function handlePress() {
    navigation.navigate('Settings');
  }

  return (
    <>
      <Appbar.Action icon={'account-cog'} onPress={handlePress} />
      {/* <AccountInfoDialog visible={showDialog} setVisible={setShowDialog} /> */}
    </>
  );
}

export default AccountInfo;
