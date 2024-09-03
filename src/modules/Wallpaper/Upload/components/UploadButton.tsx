/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {AppSizes} from '@core/constants';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import {useUpload} from '../hooks';

function UploadButton() {
  const {handleUpload, isUploading} = useUpload();
  return (
    <View style={styles.container}>
      <Button
        onPress={handleUpload}
        loading={isUploading}
        disabled={isUploading}
        mode="contained">
        Upload Wallpaper
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: AppSizes.spacing,
    marginBottom: AppSizes.spacing * 2,
  },
});

export default UploadButton;
