import {StyleSheet, View} from 'react-native';
import {Button, useTheme} from 'react-native-paper';
import {TAccountInfoObject} from '..';
import {authService} from '@app/appwrite/AuthService';
import {setUserGlobalStore} from '@app/store/reducers/userReducer';
import {useState} from 'react';

type Props = {
  getObject: () => TAccountInfoObject;
};

function DialogUserActions({getObject}: Props) {
  const [loading, setLoading] = useState(false);
  const {user, navigation, dismissDialog, dispatch} = getObject();
  const {colors} = useTheme();

  function navigateToLoginScreen() {
    dismissDialog();
    navigation.navigate('Login');
  }

  async function handleLogout() {
    try {
      setLoading(true);
      await authService.logoutUser();
      dispatch(setUserGlobalStore(null));
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: colors.surfaceVariant,
      }}>
      {user ? (
        <Button
          loading={loading}
          disabled={loading}
          mode="contained"
          onPress={handleLogout}>
          Log Out
        </Button>
      ) : (
        <Button mode="contained" onPress={navigateToLoginScreen}>
          Log In
        </Button>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    padding: 16,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderBottomEndRadius: 24,
    borderBottomStartRadius: 24,
  },
});

export default DialogUserActions;
