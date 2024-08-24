/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import createAppSettingsSlice, {
  AppSettingsSlice,
} from '@app/features/appSettings/zustand/appSettingsSlice';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';
import zustandStorage from './storage';
import createMatureContentAgreementSlice, {
  MatureContentAgreementSlice,
} from '@app/features/matureContentAgreement/zustand/createMatureContentSlice';
import createUserSlice, {UserSlice} from '@app/features/auth/zustand/userSlice';
import createRemoteConfigSlice, {
  RemoteConfigSlice,
} from '@app/features/remoteConfig/zustand/remoteConfigSlice';
import createLikedWallpaperSlice, {
  LikeWallpaperSlice,
} from '@app/features/likeWallpaper/zustand/likeWallpaperSlice';
import createPreviousSearchSlice, {
  PreviousSearchSlice,
} from '@app/features/search/zustand/appSettingsSlice';

type GloablStoreType = AppSettingsSlice &
  MatureContentAgreementSlice &
  UserSlice &
  RemoteConfigSlice &
  LikeWallpaperSlice &
  PreviousSearchSlice;

const useGlobalStore = create<GloablStoreType>()(
  persist(
    immer((...a) => ({
      ...createMatureContentAgreementSlice(...a),
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

export default useGlobalStore;
