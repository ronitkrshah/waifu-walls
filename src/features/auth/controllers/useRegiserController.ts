/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {useFormik} from 'formik';
import {registerSchema} from '../schemas/RegisterSchema';
import {useMutation} from '@tanstack/react-query';
import AuthService from '../services/AuthService';
import AuthRepositoryImpl from '../repositories/AuthRepositoryImpl';
import {UserCredentials} from '../domain/repositories/AuthRepository';
import {ToastAndroid} from 'react-native';
import useGlobalStore from '@app/store';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@app/types/navigation';

function useRegisterController() {
  const setUserGlobalStore = useGlobalStore(state => state.setUser);
  const service = new AuthService(new AuthRepositoryImpl());
  const navigation = useNavigation<StackNavigationProp>();

  /**
   * This Mutation will create a new account with the email and password
   * and also create a user document in the database
   */
  const newUserMutation = useMutation({
    mutationFn(userData: UserCredentials) {
      return service.createNewAccount(userData);
    },
    onSuccess(data) {
      setUserGlobalStore(data);
      navigation.popToTop();
    },
    onError(error) {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
    },
    retry: 0,
  });

  /**
   * If `newUserMutation` is success. Then we will automagically login user
   * without typing the email and password again and again and again :)
   */
  const loginMutation = useMutation({
    mutationFn(userData: Omit<UserCredentials, 'name'>) {
      return service.loginWithEmailAndPassword(userData);
    },
    onError(error) {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
    },
    onSuccess(data) {
      setUserGlobalStore(data);
      navigation.popToTop();
    },
    retry: 0,
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

export default useRegisterController;
