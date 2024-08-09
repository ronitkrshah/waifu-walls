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

class UploadWallpaperService {
  private _repo: UploadWallpaperRepository;

  constructor(repo: UploadWallpaperRepository) {
    this._repo = repo;
  }

  /**
   * Upload Image
   */
  async uploadWallpaper(props: UploadWallpaperProps) {
    const compressedImage = await Compressor.compress(props.imagePath);
    const stats = await FileSystem.stat(compressedImage);
    await this._repo.uploadWallpaper({
      ...props,
      size: stats.size,
      imagePath: compressedImage,
    });
  }
}

export default UploadWallpaperService;
