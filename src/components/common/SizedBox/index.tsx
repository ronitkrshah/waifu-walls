/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {View} from 'react-native';

type Props = {
  vertical?: number;
  horizontal?: number;
};

function SizedBox({vertical, horizontal}: Props) {
  return <View style={{height: vertical, width: horizontal}} />;
}

export default SizedBox;
