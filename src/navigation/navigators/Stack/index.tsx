import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '@app/screens/Stack/SplashScreen';
import {TStackNavigationParamList} from '@app/types/navigation';
import {MD3Theme, withTheme} from 'react-native-paper';
import LoginScreen from '@app/screens/Stack/LoginScreen';
import SignupScreen from '@app/screens/Stack/SignupScreen';
import UploadImageScreen from '@app/screens/Stack/UploadImageScreen';
import SearchScreen from '@app/screens/Stack/SearchScreen';
import FullScreenImage from '@app/screens/Stack/FullScreenImage';
import HomeScreen from '@app/screens/Stack/HomeScreen';
import AppHeader from '@app/components/shared/AppHeader';

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
      }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          header: () => <AppHeader title="Home" />,
        }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="UploadImage" component={UploadImageScreen} />
      <Stack.Screen name="FullScreenImage" component={FullScreenImage} />
    </Stack.Navigator>
  );
}

export default withTheme(StackNavigation);
