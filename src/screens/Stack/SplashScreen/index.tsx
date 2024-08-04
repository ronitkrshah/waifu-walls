/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import useGlobalStore from '@app/store';
import {
  BottomTabNavigationRoutes,
  StackNavigationRoutes,
  StackNavigationScreenProps,
} from '@app/types/navigation';
import {useEffect} from 'react';

function SplashScreen({
  navigation,
}: StackNavigationScreenProps<StackNavigationRoutes.SPLASH_SCREEN>) {
  const isAgreementAccepted = useGlobalStore(
    state => state.matureContentAgreement.isAgreementAccepted,
  );

  useEffect(() => {
    if (isAgreementAccepted) {
      navigation.replace(StackNavigationRoutes.HOME_SCREEN, {
        screen: BottomTabNavigationRoutes.WAIFUS,
      });
    } else {
      navigation.replace(StackNavigationRoutes.SETUP_WIZARD_SCREEN);
    }
  }, []);

  return null;
}

export default SplashScreen;
