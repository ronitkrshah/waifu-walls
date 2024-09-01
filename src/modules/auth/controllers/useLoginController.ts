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
import {UserCredentials} from '../domain/repositories/AuthRepository';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@app/types/navigation';
import {useFormik} from 'formik';
import {loginSchema} from '../schemas/LoginSchema';

function useLoginController() {
  const service = new AuthService(new AuthRepositoryImpl());
  const setUserGlobalStore = useGlobalStore(state => state.setUser);
  const navigation = useNavigation<StackNavigationProp>();

  /** Log Out Query */
  const loginMutation = useMutation({
    mutationFn: (user: Omit<UserCredentials, 'name'>) =>
      service.loginWithEmailAndPassword(user),
    onSuccess(data) {
      setUserGlobalStore(data);
      navigation.popToTop();
    },
    onError(error) {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
    },
  });

  /** Form Handling */
  const form = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit(values) {
      loginMutation.mutate(values);
    },
    validationSchema: loginSchema,
  });

  return {
    form,
    isPending: loginMutation.isPending,
  };
}

export default useLoginController;
