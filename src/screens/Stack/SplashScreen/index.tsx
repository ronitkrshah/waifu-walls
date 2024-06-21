import {authService} from '@app/appwrite/AuthService';
import {setUserGlobalStore} from '@app/store/reducers/userReducer';
import {TStackNavigationScreenProps} from '@app/types/navigation';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

function SplashScreen({navigation}: TStackNavigationScreenProps<'Splash'>) {
  const dispatch = useDispatch();

  console.log('SplashScreen');

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await authService.getCurrentUser();
        dispatch(
          setUserGlobalStore({
            avatarUrl: '',
            userId: user.$id,
            role: undefined,
            name: 'Baka',
            email: user.email,
          }),
        );
      } catch (e) {
      } finally {
        navigation.replace('Home', {screen: 'Mobile'});
      }
    };

    getUser();
  }, [dispatch, navigation]);

  return null;
}

export default SplashScreen;
