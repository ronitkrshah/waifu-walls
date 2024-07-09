import Clipboard from '@react-native-clipboard/clipboard';
import {ToastAndroid} from 'react-native';
import {Button} from 'react-native-paper';

type Props = {
  userId: string;
};

function UserId({userId}: Props) {
  function copyUserId() {
    Clipboard.setString(userId);
    ToastAndroid.show('User ID Copied', ToastAndroid.SHORT);
  }

  return (
    <Button mode="elevated" onPress={copyUserId}>
      {userId}
    </Button>
  );
}

export default UserId;
