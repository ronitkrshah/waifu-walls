import {useState} from 'react';
import {Appbar} from 'react-native-paper';
import AccountInfoDialog from './AccountInfoDialog';

function AccountInfo() {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
      <Appbar.Action icon={'account-cog'} onPress={() => setShowDialog(true)} />
      <AccountInfoDialog visible={showDialog} setVisible={setShowDialog} />
    </>
  );
}

export default AccountInfo;
