/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {useGlobalStore} from '@core/store';
import {useEffect, useState} from 'react';
import {useShallow} from 'zustand/react/shallow';
import {IWallpaper} from '@core/interfaces';

type Props = {
  wallpaper: IWallpaper;
};

function useFavorite({wallpaper}: Props) {
  const [isLiked, setIsLiked] = useState(false);
  const {
    addNewWallpaper,
    checkIfAlreadyAdded,
    removeFromFavourites,
    wallpaperList,
  } = useGlobalStore(
    useShallow(state => ({
      addNewWallpaper: state.addNewWallpaperToFavourites,
      checkIfAlreadyAdded: state.checkIfWallpaperAlreadyAddedInFavourites,
      removeFromFavourites: state.removeWallpaperFromFavouritesById,
      wallpaperList: state.likedWallpapers,
    })),
  );
  /**
   * Handle Press on Like Button
   */
  function handleLikeButtonPress() {
    if (isLiked) {
      removeFromFavourites(wallpaper.id);
      setIsLiked(false);
    } else {
      addNewWallpaper(wallpaper);
      setIsLiked(true);
    }
  }

  useEffect(() => {
    setIsLiked(checkIfAlreadyAdded(wallpaper.id));
  }, [checkIfAlreadyAdded, wallpaper.id]);

  return {
    handleLikeButtonPress,
    isLiked,
    wallpaperList,
  };
}

export default useFavorite;
