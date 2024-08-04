/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import useGlobalStore from '@app/store';
import {
  BottomTabNavigationRoutes,
  StackNavigationProp,
  StackNavigationRoutes,
} from '@app/types/navigation';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {ToastAndroid} from 'react-native';

function useMatureContentAgreementController() {
  const [isMatured, setIsMatured] = useState(false);
  const [acceptedTOC, setAcceptedTOC] = useState(false);
  const navigation = useNavigation<StackNavigationProp>();
  const setAgreementAccepted = useGlobalStore(
    state => state.acceptMatureContentAgreement,
  );

  /** Handle On User Clicks Proceed */
  function handleProceed() {
    if (!isMatured || !acceptedTOC) {
      ToastAndroid.show('Accept End User Agreements', ToastAndroid.SHORT);
      return;
    }
    setAgreementAccepted();
    navigation.replace(StackNavigationRoutes.HOME_SCREEN, {
      screen: BottomTabNavigationRoutes.WAIFUS,
    });
  }

  return {
    isMatured,
    toggleIsMatured: () => setIsMatured(prev => !prev),
    acceptedTOC,
    toggleAcceptedTOC: () => setAcceptedTOC(prev => !prev),
    handleProceed,
  };
}

export default useMatureContentAgreementController;
