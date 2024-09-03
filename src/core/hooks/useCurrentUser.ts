/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {useGlobalStore} from '@core/store';
import {useShallow} from 'zustand/react/shallow';

export function useCurrentUser() {
  const user = useGlobalStore(
    useShallow(state => ({
      currentUser: state.user,
      removeUser: state.removeUser,
      setUser: state.setUser,
    })),
  );

  return user;
}
