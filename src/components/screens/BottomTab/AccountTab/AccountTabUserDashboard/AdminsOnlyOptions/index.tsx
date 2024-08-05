/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Fragment} from 'react';
import AdminControlsButton from './AdminControlsButton';

function AdminsOnlyFeatures() {
  return (
    <Fragment>
      <AdminControlsButton />
    </Fragment>
  );
}

export default AdminsOnlyFeatures;
