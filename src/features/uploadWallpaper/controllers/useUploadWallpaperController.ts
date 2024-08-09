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
import {ToastAndroid} from 'react-native';
import pickImageFromGallery from '../utils/pickImageFromGallery';
import {useCallback} from 'react';
import {useMutation} from '@tanstack/react-query';
import UploadWallpaperService from '../services/UploadWallpaperService';
import UploadWallpaperRepositoryImpl from '../repositories/UploadWallpaperRepository';
import {UploadWallpaperProps} from '../types';
import useGlobalStore from '@app/store';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@app/types/navigation';

function useUploadWallpaperController() {
  const uploadService = new UploadWallpaperService(
    new UploadWallpaperRepositoryImpl(),
  );
  const userId = useGlobalStore(state => state.user.userId);
  const navigation = useNavigation<StackNavigationProp>();
  const {
    isMatureContent,
    dispatch,
    imageTags,
    imagePath,
    title,
    orignialAuthor,
    originalPostLink,
  } = useUploadWallpaperContext();

  /**
   * Wallpaper Mutation
   */
  const uploadWallpaperMutation = useMutation({
    mutationFn: (props: UploadWallpaperProps) =>
      uploadService.uploadWallpaper(props),
    retry: false,
    onError(error) {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
    },
    onSuccess() {
      ToastAndroid.show('Image Uploaded', ToastAndroid.SHORT);
      navigation.popToTop();
    },
  });

  /**
   * Open Gallery For Image Pick
   */
  async function chooseImage() {
    const image = await pickImageFromGallery();
    if (!Array.isArray(image)) {
      dispatch({
        type: UploadWallpaperActionTypes.UPDATE_IMAGE_PATH,
        payload: image.uri,
      });
    }
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
    uploadWallpaperMutation.mutate({
      title,
      originalPostLink,
      imagePath,
      tags: imageTags,
      userId,
      isAdultContent: isMatureContent,
      originalAuthorName: orignialAuthor,
    });
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
    isUploading: uploadWallpaperMutation.isPending,
  };
}

export default useUploadWallpaperController;
