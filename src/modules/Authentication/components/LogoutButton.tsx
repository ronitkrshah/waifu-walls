/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Button} from 'react-native-paper';
import {useLogout} from '../hooks';

function LogoutButton() {
  const {isPending, logOut} = useLogout();
  return (
    <Button
      mode="contained"
      onPress={logOut}
      disabled={isPending}
      loading={isPending}>
      Log Out
    </Button>
  );
}

export default LogoutButton;
