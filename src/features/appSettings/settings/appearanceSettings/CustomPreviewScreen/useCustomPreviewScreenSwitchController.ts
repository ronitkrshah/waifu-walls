/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import useGlobalStore from '@app/store';
import {useShallow} from 'zustand/react/shallow';

function useCustomPreviewScreenSwitchController() {
  const {showCustomPreviewScreen, setShowCustomPreviewScreen} = useGlobalStore(
    useShallow(state => ({
      showCustomPreviewScreen: state.appSettings.useCustomizePreviewScreen,
      setShowCustomPreviewScreen: state.setUseCustomizePreviewScreen,
    })),
  );

  /**
   * Handle On Press
   */
  function handleOnChange(value: boolean) {
    setShowCustomPreviewScreen(value);
  }

  return {
    isSwitchEnabled: showCustomPreviewScreen,
    handleOnChange,
  };
}

export default useCustomPreviewScreenSwitchController;
