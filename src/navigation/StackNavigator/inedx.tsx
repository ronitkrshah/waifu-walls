/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {SplashScreen} from '@app/screens/Stack';
import {
  StackNavigationParamList,
  StackNavigationRoutes,
} from '@app/types/navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<StackNavigationParamList>();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={StackNavigationRoutes.SPLASH_SCREEN}
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
