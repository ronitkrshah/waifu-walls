import {User} from '@app/store/reducers/userReducer';
import {Text} from 'react-native-paper';

type Props = {
  user: User | null;
};

function UserInfo({user}: Props) {
  if (!user) {
    return null;
  }

  return (
    <>
      <Text ellipsizeMode="tail" variant="titleMedium">
        {user.name}
      </Text>
      <Text ellipsizeMode="tail" variant="labelMedium">
        {user.email}
      </Text>
    </>
  );
}

export default UserInfo;
