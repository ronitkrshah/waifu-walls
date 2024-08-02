/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import AccountTabUserDashboard from '@app/components/screens/BottomTab/AccountTab/AccountTabUserDashboard';
import {
  BottomTabNavigationRoutes,
  BottomTabNavigationScreenProps,
  StackNavigationRoutes,
} from '@app/types/navigation';
import {Fragment} from 'react';
import {Appbar} from 'react-native-paper';

function AccountTab({
  navigation,
}: BottomTabNavigationScreenProps<BottomTabNavigationRoutes.ACCOUNT>) {
  function navigateToSettings() {
    navigation.push(StackNavigationRoutes.SETTINGS_SCREEN);
  }
  return (
    <Fragment>
      <MyAppbar onCogPress={navigateToSettings} />
      <AccountTabUserDashboard />
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
