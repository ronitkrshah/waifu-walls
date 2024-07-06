import {Pressable, StyleSheet} from 'react-native';
import {ActivityIndicator, Text, useTheme} from 'react-native-paper';
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
  const {colors} = useTheme();

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
    <Pressable
      onPress={user ? handleLogout : navigateToLoginScreen}
      style={{...styles.container, backgroundColor: colors.error}}>
      <Text variant="headlineSmall" style={{color: colors.onError}}>
        {user ? 'Log out' : 'Log In'}
      </Text>
      {loading && <ActivityIndicator animating color={colors.onError} />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    padding: 10,
    borderTopEndRadius: 5,
    borderTopStartRadius: 5,
    borderBottomEndRadius: 24,
    borderBottomStartRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginLogoutBtn;
