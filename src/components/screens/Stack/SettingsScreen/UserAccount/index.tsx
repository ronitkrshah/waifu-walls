import {useSelector} from 'react-redux';
import UserProfile from './UserProfile';
import {GlobalStoreRootState} from '@app/store/store';
import LoginLogoutBtn from './LoginLogoutBtn';

function UserAccount() {
  const user = useSelector((state: GlobalStoreRootState) => state.user.user);

  return (
    <>
      <UserProfile user={user} />
      <LoginLogoutBtn user={user} />
    </>
  );
}

export default UserAccount;
