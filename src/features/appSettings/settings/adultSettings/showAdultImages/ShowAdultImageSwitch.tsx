/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import SettingsSwitchTile from '@app/features/appSettings/components/SettingsSwitchTile';
import useAdultImageSwitchController from './useAdultImageSwitchController';

function ShowAdultImageSwitch() {
  const {handleOnChange, isSwitchEnabled} = useAdultImageSwitchController();

  return (
    <SettingsSwitchTile
      title="Show Adult Images"
      description="18+ Images"
      leftIcon="no-adult-content"
      isSwitchEnabled={isSwitchEnabled}
      onPress={handleOnChange}
    />
  );
}

export default ShowAdultImageSwitch;
