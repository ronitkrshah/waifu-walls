/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Image as Compressor} from 'react-native-compressor';
import UploadWallpaperRepository from '../domain/repositories/UploadWallpaperRepository';
import {UploadWallpaperProps} from '../types';
import * as FileSystem from '@dr.pogodin/react-native-fs';
import {WallpaperLimits} from '@app/utils/constants/limits';
import UploadWallpaperTextValidations from '../utils/validations';

class UploadWallpaperService {
  private _repo: UploadWallpaperRepository;

  constructor(repo: UploadWallpaperRepository) {
    this._repo = repo;
  }

  /**
   * Upload Image
   */
  async uploadWallpaper(props: UploadWallpaperProps) {
    /** Text Length Validation */
    UploadWallpaperTextValidations({
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
    });
  }
}

export default UploadWallpaperService;
