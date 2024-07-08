import {StyleSheet, View} from 'react-native';
import UserAvatar from './UserAvatar';
import UserInfo from './UserInfo';
import {User} from '@app/store/reducers/userReducer';

type Props = {
  user: User | null;
};

function UserProfile({user}: Props) {
  return (
    <View style={styles.container}>
      <UserAvatar name={user?.name} />
      <UserInfo user={user} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    alignItems: 'center',
  },
});

export default UserProfile;
