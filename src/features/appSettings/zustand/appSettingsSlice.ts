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
  };
};

export const enum AppSettingsActionType {
  TOGGLE_CUSTOMIZE_PREVIEW,
}

type AppSettingsActions = {
  toggleUseCustomizePreviewScreen(): void;
  toggleSetShowMatureContent(): void;
};

export type AppSettingsSlice = AppSettingsState & AppSettingsActions;

const initialState: AppSettingsState = {
  appSettings: {useCustomizePreviewScreen: false, showMatureContent: false},
};

const createAppSettingsSlice: StateCreator<
  AppSettingsSlice,
  [['zustand/immer', never], never],
  [],
  AppSettingsSlice
> = set => ({
  ...initialState,
  toggleUseCustomizePreviewScreen: () =>
    set(state => {
      state.appSettings.useCustomizePreviewScreen =
        !state.appSettings.useCustomizePreviewScreen;
    }),
  toggleSetShowMatureContent: () =>
    set(state => {
      state.appSettings.showMatureContent =
        !state.appSettings.showMatureContent;
    }),
});

export default createAppSettingsSlice;
