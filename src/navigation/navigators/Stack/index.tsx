import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '@app/screens/Stack/SplashScreen';
import {TStackNavigationParamList} from '@app/types/navigation';
import TabNavigation from '../Tab';
import LoginScreen from '@app/screens/Stack/LoginScreen';
import SignupScreen from '@app/screens/Stack/SignupScreen';
import UploadImageScreen from '@app/screens/Stack/UploadImageScreen';
import FullScreenImage from '@app/screens/Stack/FullScreenImage';
import AppHeader from '@app/components/shared/AppHeader';
import SettingsScreen from '@app/screens/Stack/SettingsScreen';
import {useAppTheme} from '@app/components/theme/MaterialYouThemeProvider';
import SearchReslutsScreen from '@app/screens/Stack/SearchResultsScreen';

const Stack = createNativeStackNavigator<TStackNavigationParamList>();

function StackNavigation() {
  const theme = useAppTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
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
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: true,
          header: () => <AppHeader title="Settings" mode="medium" />,
        }}
      />
      <Stack.Screen name="Home" component={TabNavigation} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
