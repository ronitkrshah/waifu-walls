import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '@app/screens/Stack/SplashScreen';
import {TStackNavigationParamList} from '@app/types/navigation';
import TabNavigation from '../Tab';
import {MD3Theme, withTheme} from 'react-native-paper';
import LoginScreen from '@app/screens/Stack/LoginScreen';
import SignupScreen from '@app/screens/Stack/SignupScreen';
import UploadImageScreen from '@app/screens/Stack/UploadImageScreen';
import FullScreenImage from '@app/screens/Stack/FullScreenImage';
import SearchReslutsScreen from '@app/screens/Stack/SearchResultsScreen';
import DonationScreen from '@app/screens/Stack/DonationScreen';
import UserInformationScreen from '@app/screens/Stack/UserInformationScreen';

type Props = {
  theme: MD3Theme;
};

const Stack = createNativeStackNavigator<TStackNavigationParamList>();

function StackNavigation({theme}: Props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarColor: 'transparent',
        statusBarTranslucent: true,
        statusBarStyle: theme.dark ? 'light' : 'dark',
        contentStyle: {backgroundColor: theme.colors.surface},
        navigationBarColor: theme.colors.surface,
      }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="SearchResluts" component={SearchReslutsScreen} />
      <Stack.Screen name="UploadImage" component={UploadImageScreen} />
      <Stack.Screen
        name="FullScreenImage"
        component={FullScreenImage}
        options={{
          animation: 'fade',
        }}
      />
      <Stack.Screen name="Donation" component={DonationScreen} />
      <Stack.Screen name="UserInformation" component={UserInformationScreen} />
      <Stack.Screen name="Home" component={TabNavigation} />
    </Stack.Navigator>
  );
}

export default withTheme(StackNavigation);
