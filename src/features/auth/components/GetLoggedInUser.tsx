/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import useLoggedInController from '../controllers/useLoggedInUserController';

function GetLoggedInUser() {
  useLoggedInController();

  return null;
}

export default GetLoggedInUser;
