import {Button} from 'react-native-paper';
import {authService} from '@app/appwrite/AuthService';
import {User, setUserGlobalStore} from '@app/store/reducers/userReducer';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {TUseNavigation} from '@app/types/navigation';
import {useDispatch} from 'react-redux';

type Props = {
  user: User | null;
};

function LoginLogoutBtn({user}: Props) {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<TUseNavigation>();
  const dispatch = useDispatch();

  function navigateToLoginScreen() {
    navigation.navigate('Login');
  }

  async function handleLogout() {
    try {
      setLoading(true);
      await authService.logoutUser();
      dispatch(setUserGlobalStore(null));
    } catch (e) {
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      onPress={user ? handleLogout : navigateToLoginScreen}
      disabled={loading}
      loading={loading}
      mode={user ? 'contained-tonal' : 'contained'}>
      {user ? 'Log out' : 'Log In'}
    </Button>
  );
}

export default LoginLogoutBtn;
