import {TStackNavigationScreenProps} from '@app/types/navigation';
import {useEffect} from 'react';

function SplashScreen({navigation}: TStackNavigationScreenProps<'Splash'>) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home', {screen: 'Mobile'});
    }, 2000);
  }, [navigation]);
  return null;
}

export default SplashScreen;
