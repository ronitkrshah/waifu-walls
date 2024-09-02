/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {StateCreator} from 'zustand';

type RemoteConfigState = {
  remoteConfig: {
    shouldUploadImages: boolean;
  };
};

type RemoteConfigActions = {
  setShouldUploadImages(value: boolean): void;
};

export type RemoteConfigSlice = RemoteConfigState & RemoteConfigActions;

const initialState: RemoteConfigState = {
  remoteConfig: {
    shouldUploadImages: false,
  },
};

export const createRemoteConfigSlice: StateCreator<
  RemoteConfigSlice,
  [['zustand/immer', never], never],
  [],
  RemoteConfigSlice
> = set => ({
  ...initialState,
  setShouldUploadImages: (value: boolean) =>
    set(state => {
      state.remoteConfig.shouldUploadImages = value;
    }),
});
