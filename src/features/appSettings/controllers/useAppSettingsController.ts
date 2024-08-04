/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import AppSettings, {AppSettingsType} from '../types/AppSettings';
import useGlobalStore from '@app/store';
import {useShallow} from 'zustand/react/shallow';

function useAppSettingsController() {
  const globalState = useGlobalStore(
    useShallow(state => ({
      customizePreview: state.appSettings.useCustomizePreviewScreen,
      toggleCustomizePreview: state.toggleUseCustomizePreviewScreen,
    })),
  );

  /** List Of App Settings */
  const AppSettingsList: AppSettings[] = [
    {
      id: 'customizePreview',
      type: AppSettingsType.SWITCH,
      title: 'Use Customize Waifu Preview Screen',
      subtitle:
        'Use customize preview screen instead of default one. Using Accelerometer',
      disabled: false,
      isEnabled: globalState.customizePreview,
      onPress: globalState.toggleCustomizePreview,
    },
  ];

  return {
    AppSettingsList,
  };
}

export default useAppSettingsController;
