/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {useMutation} from '@tanstack/react-query';
import AuthRepositoryImpl from '../repository/AuthRepositoryImpl';
import AuthService from '../services/AuthService';
import {useGlobalStore} from '@core/store';
import {ToastAndroid} from 'react-native';
import {IUserCredentials} from '../domain/repositories/IAuthRepository';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@app/navigation/types';
import {useFormik} from 'formik';
import {loginSchema} from '../schemas/LoginSchema';

function useLogin() {
  const service = new AuthService(new AuthRepositoryImpl());
  const setUserGlobalStore = useGlobalStore(state => state.setUser);
  const navigation = useNavigation<StackNavigationProp>();

  /** Log In Query */
  const loginMutation = useMutation({
    mutationFn: (user: Omit<IUserCredentials, 'name'>) =>
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

export default useLogin;
