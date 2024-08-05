/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  BottomTabNavigationProp,
  BottomTabNavigationRoutes,
  StackNavigationRoutes,
} from '@app/types/navigation';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-paper';

function PendingRequestsButton() {
  const navigation =
    useNavigation<BottomTabNavigationProp<BottomTabNavigationRoutes.ACCOUNT>>();

  function onPress() {
    navigation.push(StackNavigationRoutes.PENDING_REQUESTS_SCREEN);
  }

  return (
    <Button icon={'file-clock'} onPress={onPress}>
      Pending Requests
    </Button>
  );
}

export default PendingRequestsButton;
