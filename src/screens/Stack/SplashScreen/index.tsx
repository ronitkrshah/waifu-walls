import UserAgreement from '@app/components/screens/Stack/SplashScreen/UserAgreement';
import {SETTINGS_KEY} from '@app/constants/keys';
import {
  TSettingsReducer,
  updateAppSettings,
} from '@app/store/reducers/settingsReducer';
import {TStackNavigationScreenProps} from '@app/types/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';

function SplashScreen({navigation}: TStackNavigationScreenProps<'Splash'>) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadSavedData = async () => {
      setLoading(true);
      try {
        const savedAppSettings = await AsyncStorage.getItem(SETTINGS_KEY);
        if (!savedAppSettings) {
          setLoading(false);
        } else {
          const parsedSettings: TSettingsReducer = JSON.parse(savedAppSettings);
          if (parsedSettings.setupCompleted) {
            navigation.replace('Home', {screen: 'HomeTab'});
          } else {
            setLoading(false);
          }
          dispatch(updateAppSettings(parsedSettings));
        }
      } catch (e) {}
    };

    loadSavedData();
  }, [dispatch, navigation]);

  return !loading ? (
    <SafeAreaView style={styles.container}>
      <UserAgreement />
    </SafeAreaView>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default SplashScreen;
