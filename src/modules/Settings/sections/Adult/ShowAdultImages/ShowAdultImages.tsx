/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {SwitchButtonTile} from '@core/components/shared';
import useShowAdultImages from './useShowAdultImages';

function ShowAdultImages() {
  const {handleOnChange, isSwitchEnabled} = useShowAdultImages();

  return (
    <SwitchButtonTile
      title="Show Adult Images"
      description="18+ Images"
      leftIcon="no-adult-content"
      isSwitchEnabled={isSwitchEnabled}
      onPress={handleOnChange}
    />
  );
}

export default ShowAdultImages;
