/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';
import zustandStorage from './storage';
import {
  type AppSettingsSlice,
  createAppSettingsSlice,
} from '@app/modules/Settings/zustand';
import {
  type AgreementSlice,
  createAgreementSlice,
} from '@app/modules/Agreement/zustand';
import {
  type UserSlice,
  createUserSlice,
} from '@app/modules/Authentication/zustand';
import {
  type RemoteConfigSlice,
  createRemoteConfigSlice,
} from '@app/modules/RemoteConfig/zustand';
import {
  type LikeWallpaperSlice,
  createLikedWallpaperSlice,
} from '@app/modules/Wallpaper/Like/zustand';
import {
  type PreviousSearchSlice,
  createPreviousSearchSlice,
} from '@app/modules/Search/zustand';

type GloablStoreType = AppSettingsSlice &
  AgreementSlice &
  UserSlice &
  RemoteConfigSlice &
  LikeWallpaperSlice &
  PreviousSearchSlice;

export const useGlobalStore = create<GloablStoreType>()(
  persist(
    immer((...a) => ({
      ...createAgreementSlice(...a),
      ...createAppSettingsSlice(...a),
      ...createUserSlice(...a),
      ...createRemoteConfigSlice(...a),
      ...createLikedWallpaperSlice(...a),
      ...createPreviousSearchSlice(...a),
    })),
    {
      name: 'GLOBAL_STATE',
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);
