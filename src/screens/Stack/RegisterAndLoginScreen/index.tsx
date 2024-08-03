/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import RegisterPage from '@app/components/screens/Stack/RegisterAndLoginScreen/RegisterPage';
import LoginPage from '@app/components/screens/Stack/RegisterAndLoginScreen/LoginPage';
import AnimatedScrollViewWithActiveTabIndicator from '@app/components/shared/AnimatedScrollViewWithActiveTabIndicator';
import {Appbar} from 'react-native-paper';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';

function RegisterAndLoginScreen() {
  return (
    <AnimatedScrollViewWithActiveTabIndicator
      buttonLabelOne="Sign In"
      buttonLabelTwo="Sign Up">
      <LoginPage />
      <RegisterPage />
    </AnimatedScrollViewWithActiveTabIndicator>
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
