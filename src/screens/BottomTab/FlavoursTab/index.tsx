/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {FlavoursTabComponents} from '@core/components/screens/BottomTab';
import {AnimatedSwipeableTabs} from '@core/components/shared';
import {FlavorsList} from '@core/constants';
import {Fragment} from 'react';
import {Appbar} from 'react-native-paper';

function FlavoursTab() {
  return (
    <Fragment>
      <MyAppbar />
      <AnimatedSwipeableTabs buttonLabelOne="SFW" buttonLabelTwo="NSFW">
        <FlavoursTabComponents.FlavoursList list={FlavorsList.SFW} />
        <FlavoursTabComponents.FlavoursList list={FlavorsList.NSFW} />
      </AnimatedSwipeableTabs>
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
