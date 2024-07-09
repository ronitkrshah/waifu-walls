import {authService} from '@app/appwrite/AuthService';
import UserInformationUserProfile from '@app/components/screens/Stack/UserInformationScreen/UserInformationUserProfile';
import {TStackNavigationScreenProps} from '@app/types/navigation';
import {IDatabaseUser} from '@app/types/wallpaper';
import {useEffect, useState} from 'react';
import {ToastAndroid} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

function UserInformationScreen({
  route,
  navigation,
}: TStackNavigationScreenProps<'UserInformation'>) {
  const [user, setUser] = useState<IDatabaseUser>();

  useEffect(() => {
    authService
      .getUserAccountInformation(route.params.userId)
      .then((data) => setUser(data))
      .catch(() => {
        ToastAndroid.show('User Not Found!', ToastAndroid.SHORT);
        navigation.goBack();
      });
  }, [route.params.userId, navigation]);

  return (
    <SafeAreaView>
      {user ? (
        <UserInformationUserProfile user={user} />
      ) : (
        <ActivityIndicator animating />
      )}
    </SafeAreaView>
  );
}

export default UserInformationScreen;
