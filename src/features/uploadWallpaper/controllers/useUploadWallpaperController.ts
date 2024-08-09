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
import {Image} from 'react-native';
import pickImageFromGallery from '../utils/pickImageFromGallery';
import {useCallback} from 'react';

function useUploadWallpaperController() {
  const {
    isMatureContent,
    dispatch,
    imageTags,
    imagePath,
    title,
    wallpaperSize,
    orignialAuthor,
    originalPostLink,
  } = useUploadWallpaperContext();

  /**
   * Open Gallery For Image Pick
   */
  async function chooseImage() {
    const image = await pickImageFromGallery();
    if (Array.isArray(image)) {
      return;
    }
    Image.getSize(image.uri!, size => {
      dispatch({
        type: UploadWallpaperActionTypes.UPDATE_WALLPAPER_SIZE,
        payload: size,
      });
    });
    dispatch({
      type: UploadWallpaperActionTypes.UPDATE_IMAGE_PATH,
      payload: image.uri,
    });
  }

  /**
   * Update Selected Tags List
   */
  const updateSelectedTags = useCallback(
    function (item: string) {
      const _tempArray = [...imageTags];
      if (_tempArray.includes(item)) {
        const _filteredArray = _tempArray.filter(current => current !== item);
        dispatch({
          type: UploadWallpaperActionTypes.UPDATE_IMAGE_TAGS,
          payload: _filteredArray,
        });
      } else {
        _tempArray.push(item);
        dispatch({
          type: UploadWallpaperActionTypes.UPDATE_IMAGE_TAGS,
          payload: _tempArray,
        });
      }
    },
    [imageTags, dispatch],
  );

  /**
   * Handle Upload
   */
  function handleUpload() {
    console.log('Image Path:', imagePath);
    console.log('Image Size:', wallpaperSize);
    console.log('Image Tags:', imageTags);
    console.log('Is Mature', isMatureContent);
    console.log('Image Title:', title);
    console.log('Image Original Author:', orignialAuthor);
    console.log('Image Original Post Link:', originalPostLink);
  }

  return {
    wallpaperUri: imagePath,
    chooseImage,
    updateSelectedTags,
    imageTags,
    isMatureContent,
    toggleIsMatureContent: () => {
      dispatch({
        type: UploadWallpaperActionTypes.TOGGLE_MATURE_CONTENT,
        payload: undefined,
      });
    },
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
    handleUpload,
  };
}

export default useUploadWallpaperController;
