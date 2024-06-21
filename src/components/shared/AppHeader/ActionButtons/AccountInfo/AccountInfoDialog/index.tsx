import {TUseNavigation} from '@app/types/navigation';
import {useNavigation} from '@react-navigation/native';
import {Dispatch, SetStateAction} from 'react';
import {Dialog, Portal} from 'react-native-paper';
import DialogHeader from './DialogHeader';
import DialogUserProfile from './DialogUserProfile';
import DialogUserActions from './DialogUserActions';

type Props = {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

export type TAccountInfoObject = {
  navigation: TUseNavigation;
  dismissDialog: () => void;
};

function AccountInfoDialog({visible, setVisible}: Props) {
  const navigation = useNavigation<TUseNavigation>();

  function dismissDialog() {
    setVisible(false);
  }

  function getAccountInfoObject() {
    return {
      navigation,
      dismissDialog,
    };
  }

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={dismissDialog}>
        <Dialog.Content>
          <DialogHeader getObject={getAccountInfoObject} />
          <DialogUserProfile />
          <DialogUserActions getObject={getAccountInfoObject} />
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
}

export default AccountInfoDialog;
