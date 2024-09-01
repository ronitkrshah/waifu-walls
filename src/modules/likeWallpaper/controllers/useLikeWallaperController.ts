/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import useGlobalStore from '@app/store';
import {WallpaperFeature} from '@app/modules';
import {useEffect, useState} from 'react';
import {useShallow} from 'zustand/react/shallow';

type Props = {
  wallpaper: WallpaperFeature.WallpaperList.IWallpaper;
};

function useLikeWallpaperController({wallpaper}: Props) {
  const [isLiked, setIsLiked] = useState(false);
  const {addNewWallpaper, checkIfAlreadyAdded, removeFromFavourites} =
    useGlobalStore(
      useShallow(state => ({
        addNewWallpaper: state.addNewWallpaperToFavourites,
        checkIfAlreadyAdded: state.checkIfWallpaperAlreadyAddedInFavourites,
        removeFromFavourites: state.removeWallpaperFromFavouritesById,
      })),
    );

  /** Handle Press on Like Button */
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
  };
}

export default useLikeWallpaperController;
