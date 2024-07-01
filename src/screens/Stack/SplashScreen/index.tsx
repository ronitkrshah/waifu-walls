import {authService} from '@app/appwrite/AuthService';
import {setUserGlobalStore} from '@app/store/reducers/userReducer';
import {TStackNavigationScreenProps} from '@app/types/navigation';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

function SplashScreen({navigation}: TStackNavigationScreenProps<'Splash'>) {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await authService.getCurrentUser();
        dispatch(
          setUserGlobalStore({
            userId: user.$id,
            role: undefined,
            name: user.name,
            email: user.email,
          }),
        );
      } catch (e) {
        // ... ignore
      } finally {
        navigation.replace('Home');
      }
    };

    getUser();
  }, [dispatch, navigation]);

  return null;
}

export default SplashScreen;
