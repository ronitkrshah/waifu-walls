/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {IWallpaper} from '@core/interfaces';
import {StateCreator} from 'zustand';

type LikeWallpaperState = {
  likedWallpapers: IWallpaper[];
};

type LikeWallpaperActions = {
  removeWallpaperFromFavouritesById: (wallpaperId: IWallpaper['id']) => void;
  addNewWallpaperToFavourites: (wallpaper: IWallpaper) => void;
  checkIfWallpaperAlreadyAddedInFavourites: (wallpaperId: string) => boolean;
};

export type LikeWallpaperSlice = LikeWallpaperState & LikeWallpaperActions;

const initialState: LikeWallpaperState = {
  likedWallpapers: [],
};

export const createLikedWallpaperSlice: StateCreator<
  LikeWallpaperSlice,
  [['zustand/immer', never], never],
  [],
  LikeWallpaperSlice
> = (set, get) => ({
  ...initialState,
  addNewWallpaperToFavourites(wallpaper) {
    /** Check If Wallpaper Already Added */
    if (get().likedWallpapers.find(item => item.id === wallpaper.id)) {
      return;
    }

    set(state => {
      state.likedWallpapers.push(wallpaper);
    });
  },
  removeWallpaperFromFavouritesById(wallpaperId) {
    set(state => {
      state.likedWallpapers = state.likedWallpapers.filter(
        item => item.id !== wallpaperId,
      );
    });
  },
  checkIfWallpaperAlreadyAddedInFavourites(wallpaperId) {
    return get().likedWallpapers.find(item => item.id === wallpaperId)
      ? true
      : false;
  },
});
