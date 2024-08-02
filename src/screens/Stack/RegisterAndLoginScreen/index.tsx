/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import RegisterPage from '@app/components/screens/Stack/RegisterAndLoginScreen/RegisterPage';
import LoginPage from '@app/components/screens/Stack/RegisterAndLoginScreen/LoginPage';
import AnimatedScrollViewWithActiveTabIndicator from '@app/components/shared/AnimatedScrollViewWithActiveTabIndicator';

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

export default RegisterAndLoginScreen;
