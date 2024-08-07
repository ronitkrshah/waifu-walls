/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  name: yup.string().min(3).required('Name Is Required!'),
  email: yup
    .string()
    .email('Invalid Email Address')
    .required('Email Is Required!'),
  password: yup.string().min(8).required('Password Is Required'),
});
