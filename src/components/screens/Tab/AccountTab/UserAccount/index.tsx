import {useSelector} from 'react-redux';
import {GlobalStoreRootState} from '@app/store/store';
import {Surface} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import UserProfile from './UserProfile';
import LoginLogoutBtn from './LoginLogoutBtn';
import ManageAccountButton from './ManageAccountButton';

function UserAccount() {
  const user = useSelector((state: GlobalStoreRootState) => state.user.user);

  return (
    <Surface style={styles.container}>
      <UserProfile user={user} />
      {user && <ManageAccountButton userId={user.userId} />}
      <LoginLogoutBtn user={user} />
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '98%',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 28,
    padding: 16,
    gap: 10,
  },
});

export default UserAccount;
