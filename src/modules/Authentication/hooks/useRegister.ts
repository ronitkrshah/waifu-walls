/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {useFormik} from 'formik';
import {registerSchema} from '../schemas';
import {useMutation} from '@tanstack/react-query';
import AuthService from '../services/AuthService';
import {AuthRepositoryImpl} from '../repository';
import {IUserCredentials} from '../domain/repositories';
import {ToastAndroid} from 'react-native';
import {useGlobalStore} from '@core/store';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@app/navigation/types';

function useRegister() {
  const setUserGlobalStore = useGlobalStore(state => state.setUser);
  const service = new AuthService(new AuthRepositoryImpl());
  const navigation = useNavigation<StackNavigationProp>();

  /**
   * This Mutation will create a new account with the email and password
   * and also create a user document in the database
   */
  const newUserMutation = useMutation({
    mutationFn(userData: IUserCredentials) {
      return service.createNewAccount(userData);
    },
    onSuccess(data) {
      setUserGlobalStore(data);
      navigation.popToTop();
    },
    onError(error) {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
    },
    retry: false,
  });

  /**
   * If `newUserMutation` is success. Then we will automagically login user
   * without typing the email and password again and again and again :)
   */
  const loginMutation = useMutation({
    mutationFn(userData: Omit<IUserCredentials, 'name'>) {
      return service.loginWithEmailAndPassword(userData);
    },
    onError(error) {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
    },
    onSuccess(data) {
      setUserGlobalStore(data);
      navigation.popToTop();
    },
    retry: false,
  });

  /**
   * Form Controller that controls validations and user inputs
   */
  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit(values) {
      newUserMutation.mutate(values);
    },
    validationSchema: registerSchema,
  });

  return {
    form,
    isCreating: newUserMutation.isPending || loginMutation.isPending,
  };
}

export default useRegister;
