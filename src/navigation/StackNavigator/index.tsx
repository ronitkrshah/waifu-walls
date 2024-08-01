/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {RegisterAndLoginScreen, SplashScreen} from '@app/screens/Stack';
import {
  StackNavigationParamList,
  StackNavigationRoutes,
} from '@app/types/navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MD3Theme, withTheme} from 'react-native-paper';
import BottomTabNavigator from '../BottomTabNavigator';

type Props = {
  theme: MD3Theme;
};

const Stack = createNativeStackNavigator<StackNavigationParamList>();

function StackNavigator({theme}: Props) {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: theme.colors.surface},
        navigationBarHidden: true,
      }}>
      <Stack.Screen
        name={StackNavigationRoutes.SPLASH_SCREEN}
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={StackNavigationRoutes.HOME_SCREEN}
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={StackNavigationRoutes.REGISTER_AND_LOGIN_SCREEN}
        component={RegisterAndLoginScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default withTheme(StackNavigator);