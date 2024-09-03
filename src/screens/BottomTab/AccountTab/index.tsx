/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import AccountTabLoginBox from '@core/components/screens/BottomTab/AccountTab/AccountTabLoginBox';
import AccountTabUserDashboard from '@core/components/screens/BottomTab/AccountTab/AccountTabUserDashboard';
import {
  BottomTabNavigationRoutes,
  BottomTabNavigationScreenProps,
  StackNavigationRoutes,
} from '@app/navigation/types';
import {Fragment} from 'react';
import {Appbar} from 'react-native-paper';
import {useCurrentUser} from '@core/hooks';

function AccountTab({
  navigation,
}: BottomTabNavigationScreenProps<BottomTabNavigationRoutes.ACCOUNT>) {
  const {currentUser} = useCurrentUser();

  function navigateToSettings() {
    navigation.push(StackNavigationRoutes.SETTINGS_SCREEN);
  }
  return (
    <Fragment>
      <MyAppbar onCogPress={navigateToSettings} />
      {currentUser.isAuthenticated ? (
        <AccountTabUserDashboard />
      ) : (
        <AccountTabLoginBox />
      )}
    </Fragment>
  );
}

/** Header */
type Props = {
  onCogPress(): void;
};

function MyAppbar({onCogPress}: Props) {
  return (
    <Appbar.Header mode="large">
      <Appbar.Content title="Profile" />
      <Appbar.Action icon={'cog'} onPress={onCogPress} />
    </Appbar.Header>
  );
}

export default AccountTab;
