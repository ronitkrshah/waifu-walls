/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import UploadWallpaperContextProvider from '../store/UploadWallpaperContext';
import UploadWallpaperButton from './UploadWallpaperButton';
import UploadWallpaperDetailsInput from './UploadWallpaperDetailsInput';
import UploadWallpaperPicker from './UploadWallpaperPicker';

function UploadWallpaperFeature() {
  return (
    <UploadWallpaperContextProvider>
      <UploadWallpaperPicker />
      <UploadWallpaperDetailsInput />
      <UploadWallpaperButton />
    </UploadWallpaperContextProvider>
  );
}

export default UploadWallpaperFeature;
