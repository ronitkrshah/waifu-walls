/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import UploadWallpaperContextProvider from '../store/UploadWallpaperContext';
import ImagePicker from './ImagePicker';
import ImageDetailFields from './ImageDetailFields';
import UploadButton from './UploadButton';

function UploadWallpaperFeature() {
  return (
    <UploadWallpaperContextProvider>
      <ImagePicker />
      <ImageDetailFields />
      <UploadButton />
    </UploadWallpaperContextProvider>
  );
}

export default UploadWallpaperFeature;
