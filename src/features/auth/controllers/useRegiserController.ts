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

function useRegisterController() {
  const service = new AuthService(new AuthRepositoryImpl());
  const newUserMutation = useMutation({
    mutationFn: (userData: UserCredentials) =>
      service.createNewAccount(userData),
  });
  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit(values) {
      newUserMutation.mutate(values);
      if (newUserMutation.isError) {
        console.log('Error:', newUserMutation.error);
      }
    },
    validationSchema: registerSchema,
  });

  return {
    form,
    isCreating: newUserMutation.isPending,
  };
}

export default useRegisterController;
