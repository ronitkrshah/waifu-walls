import {TUseNavigation} from '@app/types/navigation';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-paper';

type Props = {
  userId: string;
};

function ManageAccountButton({userId}: Props) {
  const navigation = useNavigation<TUseNavigation>();

  function handlePress() {
    navigation.navigate('UserInformation', {userId});
  }

  return (
    <Button mode="outlined" onPress={handlePress}>
      Manage Account
    </Button>
  );
}

export default ManageAccountButton;
