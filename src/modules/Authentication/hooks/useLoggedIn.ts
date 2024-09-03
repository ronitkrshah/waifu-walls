/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {useQuery} from '@tanstack/react-query';
import {AuthRepositoryImpl} from '../repository';
import {AuthService} from '../services';
import {useGlobalStore} from '@core/store';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  BottomTabNavigationRoutes,
  StackNavigationProp,
  StackNavigationRoutes,
} from '@app/navigation/types';
import {useCurrentUser} from '@core/hooks';

function useLoggedIn() {
  const service = new AuthService(new AuthRepositoryImpl());
  const {removeUser, setUser} = useCurrentUser();
  const isAgreementAccepted = useGlobalStore(
    state => state.matureContentAgreement.isAgreementAccepted,
  );
  const navigation = useNavigation<StackNavigationProp>();

  const loggedInUserQuery = useQuery({
    queryKey: ['loggedInUser'],
    queryFn: () => service.getLoggedInUser(),
    enabled: isAgreementAccepted,
    retry: false,
  });

  /**
   * If user first time using the app then no need for additional for check
   * stuffs
   */
  useEffect(() => {
    if (!isAgreementAccepted) {
      navigation.replace(StackNavigationRoutes.SETUP_WIZARD_SCREEN);
      return;
    }

    if (loggedInUserQuery.isLoading) {
      return;
    }

    if (loggedInUserQuery.isSuccess) {
      setUser(loggedInUserQuery.data);
    } else if (loggedInUserQuery.isError) {
      removeUser();
    }
    navigation.replace(StackNavigationRoutes.HOME_SCREEN, {
      screen: BottomTabNavigationRoutes.WAIFUS,
    });
  }, [loggedInUserQuery.isLoading]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    isLoading: loggedInUserQuery.isLoading,
  };
}

export default useLoggedIn;
