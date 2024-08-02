/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {useUploadWallpaperContext} from '../store/UploadWallpaperContext';
import {Image} from 'react-native';
import pickImageFromGallery from '../utils/pickImageFromGallery';
import {useCallback, useEffect} from 'react';

function useUploadWallpaperController() {
  const {
    wallpaperUri,
    isMatureContent,
    setWallpaperSize,
    setWallpaperUri,
    imageTags,
    setImageTags,
    setIsMatureContent,
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
      setWallpaperSize(size);
    });
    setWallpaperUri(image.uri!);
  }

  /**
   * Update Selected Tags List
   */
  const updateSelectedTags = useCallback(
    function (item: string) {
      const _tempArray = [...imageTags];
      if (_tempArray.includes(item)) {
        const _filteredArray = _tempArray.filter(current => current !== item);
        setImageTags(_filteredArray);
      } else {
        _tempArray.push(item);
        setImageTags(_tempArray);
      }
    },
    [setImageTags, imageTags],
  );

  useEffect(() => {
    setImageTags([]);
  }, [isMatureContent, setImageTags]);

  return {
    wallpaperUri,
    chooseImage,
    updateSelectedTags,
    imageTags,
    isMatureContent,
    setIsMatureContent,
  };
}

export default useUploadWallpaperController;
