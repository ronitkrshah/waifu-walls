/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {UploadWallpaperContextProvider} from '../context';
import {UploadButton, ImageDetailFields, ImagePicker} from '../components';

function Upload() {
  return (
    <UploadWallpaperContextProvider>
      <ImagePicker />
      <ImageDetailFields />
      <UploadButton />
    </UploadWallpaperContextProvider>
  );
}

export default Upload;
