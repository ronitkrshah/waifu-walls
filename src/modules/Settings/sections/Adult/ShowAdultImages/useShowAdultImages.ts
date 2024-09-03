/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {useGlobalStore} from '@core/store';
import {useShallow} from 'zustand/react/shallow';

function useShowAdultImages() {
  const {showMatureContent, setShowMatureContent} = useGlobalStore(
    useShallow(state => ({
      showMatureContent: state.appSettings.showMatureContent,
      setShowMatureContent: state.setShowMatureContent,
    })),
  );

  /**
   * Handle On Press
   */
  function handleOnChange(value: boolean) {
    setShowMatureContent(value);
  }

  return {
    isSwitchEnabled: showMatureContent,
    handleOnChange,
  };
}

export default useShowAdultImages;
