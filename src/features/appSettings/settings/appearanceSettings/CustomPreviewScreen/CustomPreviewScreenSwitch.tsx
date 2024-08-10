/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import SettingsSwitchTile from '@app/features/appSettings/components/SettingsSwitchTile';
import useCustomPreviewScreenSwitchController from './useCustomPreviewScreenSwitchController';

function CustomPreviewScreenSwitch() {
  const {handleOnChange, isSwitchEnabled} =
    useCustomPreviewScreenSwitchController();

  return (
    <SettingsSwitchTile
      title="Animated Waifu Preview"
      description="Use Accelerometer to animate Waifu on preview screen"
      leftIcon="animation"
      isSwitchEnabled={isSwitchEnabled}
      onPress={handleOnChange}
    />
  );
}

export default CustomPreviewScreenSwitch;
