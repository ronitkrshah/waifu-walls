/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Image as Compressor} from 'react-native-compressor';
import {IUploadRepository} from '../domain/repositories/';
import {UploadWallpaperProps} from '../types';
import * as FileSystem from '@dr.pogodin/react-native-fs';
import {WallpaperLimits} from '@core/constants';
import {uploadWallpaperTextValidations} from '../utils';

class UploadService {
  private _repo: IUploadRepository;

  constructor(repo: IUploadRepository) {
    this._repo = repo;
  }

  /**
   * Upload Image
   */
  async uploadWallpaper(props: UploadWallpaperProps) {
    /** Text Length Validation */
    uploadWallpaperTextValidations({
      title: props.title,
      original_author: props.originalAuthorName,
      original_post_link: props.originalPostLink,
    });

    const originalFileStats = await FileSystem.stat(props.imagePath);
    let imageSize = originalFileStats.size;
    let localImagePath = props.imagePath;

    /**
     * If Image Size is above 200KB then compress that image
     */
    if (
      imageSize >= WallpaperLimits.MINIMUM_SIZE_FOR_IMAGE_COMPRESSION_IN_BYTES
    ) {
      const compressedImagePath = await Compressor.compress(props.imagePath);
      const compressedImageStats = await FileSystem.stat(compressedImagePath);
      imageSize = compressedImageStats.size;
      localImagePath = compressedImagePath;
    }
    /**
     *  Skip Uploading Image If it doesn't meet limits
     */
    if (imageSize > WallpaperLimits.MAXIMUM_IMAGE_UPLOAD_SIZE_LIMIT_IN_BYTES) {
      throw new Error(
        `Maximum Image Size Limit Is ${WallpaperLimits.MAXIMUM_IMAGE_UPLOAD_SIZE_LIMIT_IN_MEGABYTE} MB`,
      );
    }

    await this._repo.uploadWallpaper({
      ...props,
      size: imageSize,
      imagePath: localImagePath,
      isAdultContent: props.isAdultContent ? true : null,
    });
  }
}

export default UploadService;
