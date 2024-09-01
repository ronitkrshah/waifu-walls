/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {launchImageLibrary} from 'react-native-image-picker';

async function pickImageFromGallery() {
  try {
    const images = await launchImageLibrary({
      mediaType: 'photo',
    });

    return images.assets ? images.assets[0] : [];
  } catch (e) {
    return [];
  }
}

export default pickImageFromGallery;
