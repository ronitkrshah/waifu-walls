/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {useMutation} from '@tanstack/react-query';
import AuthRepositoryImpl from '../repositories/AuthRepositoryImpl';
import AuthService from '../services/AuthService';
import useGlobalStore from '@app/store';
import {ToastAndroid} from 'react-native';

function useLogoutController() {
  const service = new AuthService(new AuthRepositoryImpl());
  const removeUserGlobalStore = useGlobalStore(state => state.removeUser);

  /** Log Out Query */
  const logOutMutation = useMutation({
    mutationFn: () => service.logoutUser(),
    onSuccess() {
      removeUserGlobalStore();
    },
    onError(error) {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
    },
  });

  function logOut() {
    logOutMutation.mutate();
  }

  return {
    isPending: logOutMutation.isPending,
    logOut,
  };
}

export default useLogoutController;
