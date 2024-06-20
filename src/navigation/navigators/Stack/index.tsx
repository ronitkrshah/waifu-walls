import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '@app/screens/Stack/SplashScreen';
import {TStackNavigationParamList} from '@app/types/navigation';
import TabNavigation from '../Tab';
import {MD3Theme, withTheme} from 'react-native-paper';

type Props = {
  theme: MD3Theme;
};

const Stack = createNativeStackNavigator<TStackNavigationParamList>();

function StackNavigation({theme: {dark, colors}}: Props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarColor: 'transparent',
        statusBarTranslucent: true,
        statusBarStyle: dark ? 'light' : 'dark',
        contentStyle: {backgroundColor: colors.surface},
      }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Home" component={TabNavigation} />
    </Stack.Navigator>
  );
}

export default withTheme(StackNavigation);
