import {authService} from '@app/appwrite/AuthService';
import {SETTINGS_KEY} from '@app/constants/keys';
import {updateAppSettingsGlobalStore} from '@app/store/reducers/settingsReducer';
import {setUserGlobalStore} from '@app/store/reducers/userReducer';
import {TStackNavigationScreenProps} from '@app/types/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

function SplashScreen({navigation}: TStackNavigationScreenProps<'Splash'>) {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadSavedData = async () => {
      // Get Logged in User
      authService
        .getCurrentUser()
        .then((user) => {
          dispatch(
            setUserGlobalStore({
              userId: user.userId,
              role: undefined,
              name: user.name,
              email: user.email,
            }),
          );
        })
        .catch(() => {});

      try {
        const savedAppSettings = await AsyncStorage.getItem(SETTINGS_KEY);
        if (savedAppSettings) {
          dispatch(updateAppSettingsGlobalStore(JSON.parse(savedAppSettings)));
        }
      } catch (e) {}

      // Finaly Load Home Screen
      navigation.replace('Home', {screen: 'HomeScreen'});
    };

    loadSavedData();
  }, [dispatch, navigation]);

  return null;
}

export default SplashScreen;
