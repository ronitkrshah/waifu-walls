/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Flex from '@app/components/common/Flex';
import AnimatedLoadingCircleIndicator from '@app/components/shared/AnimatedLoadingCircleIndicator';
import GetLoggedInUser from '@app/modules/auth/components/GetLoggedInUser';

function SplashScreen() {
  return (
    <Flex flex={1} center>
      <AnimatedLoadingCircleIndicator />
      <GetLoggedInUser />
    </Flex>
  );
}

export default SplashScreen;
