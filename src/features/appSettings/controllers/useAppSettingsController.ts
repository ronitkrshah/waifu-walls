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
      showMatureContent: state.appSettings.showMatureContent,
      toggleShowMatureContent: state.toggleSetShowMatureContent,
    })),
  );

  /** List Of App Settings */
  const AppSettingsList: AppSettings[] = [
    {
      id: 'showMatureContentOnHome',
      type: AppSettingsType.SWITCH,
      title: 'Show Adult Waifus',
      subtitle: 'Show 18+ images on home screen',
      disabled: false,
      isEnabled: globalState.showMatureContent,
      onPress: globalState.toggleShowMatureContent,
    },
    {
      id: 'customizePreview',
      type: AppSettingsType.SWITCH,
      title: 'Custom Waifu Preview Screen',
      subtitle: 'Animating with accelerometer value',
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
