/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import FlavoursTabList from '@app/components/screens/BottomTab/FlavoursTab/FlavoursTabList';
import AnimatedScrollableTab from '@app/components/shared/AnimatedScrollableTab';
import {SFWList, NSFWList} from '@app/utils/constants/lists';
import {Fragment} from 'react';
import {Appbar} from 'react-native-paper';

function FlavoursTab() {
  return (
    <Fragment>
      <MyAppbar />
      <AnimatedScrollableTab buttonLabelOne="SFW" buttonLabelTwo="NSFW">
        <FlavoursTabList list={SFWList} />
        <FlavoursTabList list={NSFWList} />
      </AnimatedScrollableTab>
    </Fragment>
  );
}

/** Appbar */
function MyAppbar() {
  return (
    <Appbar.Header mode="large">
      <Appbar.Content title="Flavours" />
    </Appbar.Header>
  );
}

export default FlavoursTab;
