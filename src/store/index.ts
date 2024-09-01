/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import createAppSettingsSlice, {
  AppSettingsSlice,
} from '@app/modules/appSettings/zustand/appSettingsSlice';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';
import zustandStorage from './storage';
import createMatureContentAgreementSlice, {
  MatureContentAgreementSlice,
} from '@app/modules/matureContentAgreement/zustand/createMatureContentSlice';
import createUserSlice, {UserSlice} from '@app/modules/auth/zustand/userSlice';
import createRemoteConfigSlice, {
  RemoteConfigSlice,
} from '@app/modules/remoteConfig/zustand/remoteConfigSlice';
import createLikedWallpaperSlice, {
  LikeWallpaperSlice,
} from '@app/modules/likeWallpaper/zustand/likeWallpaperSlice';
import createPreviousSearchSlice, {
  PreviousSearchSlice,
} from '@app/modules/Search/zustand/appSettingsSlice';

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
