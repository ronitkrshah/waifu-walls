/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PendingRequestsFeature from '@app/features/pendingRequests/components/PendingRequestsFeature';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {Appbar} from 'react-native-paper';

function PendingRequestsScreen() {
  return <PendingRequestsFeature />;
}

/** Appbar */
PendingRequestsScreen.Appbar = function MyAppbar({
  navigation,
}: NativeStackHeaderProps) {
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={navigation.goBack} />
      <Appbar.Content title="Pending Requests" />
    </Appbar.Header>
  );
};

export default PendingRequestsScreen;
