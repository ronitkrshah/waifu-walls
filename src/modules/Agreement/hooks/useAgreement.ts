/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {useGlobalStore} from '@core/store';
import {
  BottomTabNavigationRoutes,
  StackNavigationProp,
  StackNavigationRoutes,
} from '@app/navigation/types';
import {DefaultStrings} from '@core/constants';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Linking, ToastAndroid} from 'react-native';

function useAgreement() {
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

  /** Handle Read Terms And Conditions */
  function handlePressReadTOC() {
    Linking.openURL(
      `${DefaultStrings.GITHUB_REPO_LINK}?tab=readme-ov-file#terms-and-conditions`,
    );
  }

  return {
    isMatured,
    toggleIsMatured: () => setIsMatured(prev => !prev),
    acceptedTOC,
    toggleAcceptedTOC: () => setAcceptedTOC(prev => !prev),
    handleProceed,
    handlePressReadTOC,
  };
}

export default useAgreement;
