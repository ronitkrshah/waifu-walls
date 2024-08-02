/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  StackNavigationRoutes,
  StackNavigationScreenProps,
} from '@app/types/navigation';
import {useEffect} from 'react';

function SplashScreen({
  navigation,
}: StackNavigationScreenProps<StackNavigationRoutes.SPLASH_SCREEN>) {
  useEffect(() => {
    const t = setTimeout(() => {
      navigation.replace(StackNavigationRoutes.SETUP_WIZARD_SCREEN);
    }, 1000);

    return () => clearTimeout(t);
  });

  return null;
}

export default SplashScreen;
