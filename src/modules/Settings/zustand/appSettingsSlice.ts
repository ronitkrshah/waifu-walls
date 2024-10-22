/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {StateCreator} from 'zustand';

type AppSettingsState = {
  appSettings: {
    useCustomizePreviewScreen: boolean;
    showMatureContent: boolean;
    customThemeColor?: string;
  };
};

type AppSettingsActions = {
  setUseCustomizePreviewScreen(value: boolean): void;
  setShowMatureContent(value: boolean): void;
  setAppThemeColor(color: string): void;
};

export type AppSettingsSlice = AppSettingsState & AppSettingsActions;

const initialState: AppSettingsState = {
  appSettings: {
    useCustomizePreviewScreen: false,
    showMatureContent: false,
    customThemeColor: undefined,
  },
};

export const createAppSettingsSlice: StateCreator<
  AppSettingsSlice,
  [['zustand/immer', never], never],
  [],
  AppSettingsSlice
> = set => ({
  ...initialState,
  setUseCustomizePreviewScreen: (value: boolean) =>
    set(state => {
      state.appSettings.useCustomizePreviewScreen = value;
    }),
  setShowMatureContent: (value: boolean) =>
    set(state => {
      state.appSettings.showMatureContent = value;
    }),
  setAppThemeColor(color) {
    set(state => {
      state.appSettings.customThemeColor = color;
    });
  },
});
