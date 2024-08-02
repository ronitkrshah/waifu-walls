/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import AccountTabUserDashboard from '@app/components/screens/BottomTab/AccountTab/AccountTabUserDashboard';
import {Fragment} from 'react';
import {Appbar} from 'react-native-paper';

function AccountTab() {
  return (
    <Fragment>
      <MyAppbar />
      <AccountTabUserDashboard />
    </Fragment>
  );
}

/** Header */
function MyAppbar() {
  return (
    <Appbar.Header mode="large">
      <Appbar.Content title="Profile" />
      <Appbar.Action icon={'cog'} />
    </Appbar.Header>
  );
}

export default AccountTab;
