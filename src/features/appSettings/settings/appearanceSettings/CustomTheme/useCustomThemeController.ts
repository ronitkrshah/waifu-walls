/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import useGlobalStore from '@app/store';
import {useMaterial3ThemeContext} from '@app/theme/MaterialYouTheme';
import {useShallow} from 'zustand/react/shallow';

function useCustomThemeController() {
  const {updateTheme: updateMaterialTheme} = useMaterial3ThemeContext();
  const {currentTheme, setCurrentTheme} = useGlobalStore(
    useShallow(state => ({
      currentTheme: state.appSettings.customThemeColor,
      setCurrentTheme: state.setAppThemeColor,
    })),
  );

  /** Update Global Theme */
  function updateTheme(color: string) {
    setCurrentTheme(color);
    updateMaterialTheme(color);
  }
  return {
    updateTheme,
    currentTheme,
  };
}

export default useCustomThemeController;
