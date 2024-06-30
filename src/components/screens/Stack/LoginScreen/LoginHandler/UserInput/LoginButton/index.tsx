import {authService} from '@app/appwrite/AuthService';
import {databaseService} from '@app/appwrite/DatabaseService';
import {InputBoxRef} from '@app/components/common/InputBox';
import {setUserGlobalStore} from '@app/store/reducers/userReducer';
import {TUseNavigation} from '@app/types/navigation';
import {useNavigation} from '@react-navigation/native';
import {RefObject, useState} from 'react';
import {ToastAndroid} from 'react-native';
import {Button} from 'react-native-paper';
import {useDispatch} from 'react-redux';

type Props = {
  emailRef: RefObject<InputBoxRef>;
  passwordRef: RefObject<InputBoxRef>;
};

function LoginButton({emailRef, passwordRef}: Props) {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<TUseNavigation>();
  const dispatch = useDispatch();

  async function handleSubmit() {
    const email = emailRef.current?.getValue();
    const password = passwordRef.current?.getValue();

    if (!email || !password) {
      ToastAndroid.show('Missing Fields!', ToastAndroid.SHORT);
      return;
    }

    try {
      setLoading(true);
      const user = await authService.loginUser({email, password});
      if (user) {
        const dbResp = await databaseService.getUserFromDatabase(user.userId);
        dispatch(
          setUserGlobalStore({
            userId: dbResp.userId,
            name: dbResp.name,
            email: dbResp.email,
            role: dbResp.role,
            avatarUrl: dbResp.avatarUrl,
          }),
        );

        navigation.popToTop();
      }
    } catch (e) {
      if (e instanceof Error) {
        ToastAndroid.show(e.message, ToastAndroid.SHORT);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      loading={loading}
      onPress={handleSubmit}
      mode="contained"
      disabled={loading}>
      Log In
    </Button>
  );
}

export default LoginButton;
