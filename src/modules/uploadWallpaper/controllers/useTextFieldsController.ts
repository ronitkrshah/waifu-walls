/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  UploadWallpaperActionTypes,
  useUploadWallpaperContext,
} from '../store/UploadWallpaperContext';

function useTextFieldsController() {
  const {isMatureContent, dispatch, imageTags, imagePath} =
    useUploadWallpaperContext();

  return {
    wallpaperUri: imagePath,
    imageTags,
    isMatureContent,
    updateImageTitle: (str: string) => {
      dispatch({
        type: UploadWallpaperActionTypes.UPDATE_TITLE,
        payload: str,
      });
    },
    updateOriginalAuthor: (author: string) => {
      dispatch({
        type: UploadWallpaperActionTypes.UPDATE_ORIGINAL_AUTHOR,
        payload: author,
      });
    },
    updateOriginalPostLink: (link: string) => {
      dispatch({
        type: UploadWallpaperActionTypes.UPDATE_ORIGINAL_POST_LINK,
        payload: link,
      });
    },
  };
}

export default useTextFieldsController;
