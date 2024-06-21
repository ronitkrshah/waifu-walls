import {TUseNavigation} from '@app/types/navigation';
import {useNavigation} from '@react-navigation/native';
import {Dispatch, SetStateAction} from 'react';
import {Dialog, Portal} from 'react-native-paper';
import DialogHeader from './DialogHeader';
import DialogUserProfile from './DialogUserProfile';
import DialogUserActions from './DialogUserActions';
import {useSelector} from 'react-redux';
import {GlobalStoreRootState} from '@app/store/store';
import {User} from '@app/store/reducers/userReducer';

type Props = {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

export type TAccountInfoObject = {
  navigation: TUseNavigation;
  dismissDialog: () => void;
  user: User | null;
};

function AccountInfoDialog({visible, setVisible}: Props) {
  const navigation = useNavigation<TUseNavigation>();
  const user = useSelector((state: GlobalStoreRootState) => state.user.user);

  function dismissDialog() {
    setVisible(false);
  }

  /**
   * Portal renders outside of parent tree. That's why we can't access navigation
   * and context state inside Portal. This function ref will helps child components
   * to access navigation, context and other things that aren't available inside
   * Portal using Prop Drilling
   */
  function getAccountInfoObject() {
    return {
      navigation,
      dismissDialog,
      user,
    };
  }

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={dismissDialog}>
        <Dialog.Content>
          <DialogHeader getObject={getAccountInfoObject} />
          <DialogUserProfile getObject={getAccountInfoObject} />
          <DialogUserActions getObject={getAccountInfoObject} />
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
}

export default AccountInfoDialog;
