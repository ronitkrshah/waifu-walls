/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {DefaultStyles} from '@app/utils/constants/style';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import useUploadWallpaperController from '../controllers/useUploadWallpaperController';

function UploadButton() {
  const {handleUpload} = useUploadWallpaperController();
  return (
    <View style={styles.container}>
      <Button onPress={handleUpload} mode="contained">
        Upload Wallpaper
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: DefaultStyles.SPACING,
    marginBottom: DefaultStyles.SPACING * 2,
  },
});

export default UploadButton;
