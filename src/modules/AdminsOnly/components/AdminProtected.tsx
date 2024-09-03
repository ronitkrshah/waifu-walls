/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {useCurrentUser} from '@core/hooks';
import {PropsWithChildren} from 'react';

function AdminProtected({children}: Required<PropsWithChildren>) {
  const {currentUser} = useCurrentUser();

  return currentUser.isAdmeme ? <>{children}</> : null;
}

export default AdminProtected;
