/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Flex} from '@core/components/common';
import {AnimatedCircle} from '@core/components/shared';
import {AuthenticationModule} from '@app/modules';

function SplashScreen() {
  AuthenticationModule.getLoggedIUser();

  return (
    <Flex flex={1} center>
      <AnimatedCircle />
    </Flex>
  );
}

export default SplashScreen;
