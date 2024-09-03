/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {RegisterAndLoginComponents} from '@core/components/screens/Stack';
import {Appbar} from 'react-native-paper';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {AnimatedSwipeableTabs} from '@core/components/shared';

function RegisterAndLoginScreen() {
  return (
    <AnimatedSwipeableTabs buttonLabelOne="Sign In" buttonLabelTwo="Sign Up">
      <RegisterAndLoginComponents.LoginScreen />
      <RegisterAndLoginComponents.RegisterScreen />
    </AnimatedSwipeableTabs>
  );
}

/** Appbar */
RegisterAndLoginScreen.Appbar = function MyAppbar({
  navigation,
}: NativeStackHeaderProps) {
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={navigation.goBack} />
      <Appbar.Content title="Register Or Login" />
    </Appbar.Header>
  );
};

export default RegisterAndLoginScreen;
