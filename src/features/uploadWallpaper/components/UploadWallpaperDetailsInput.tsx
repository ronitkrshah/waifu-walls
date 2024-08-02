/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {DefaultStyles} from '@app/utils/constants/style';
import {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Checkbox, List, TextInput} from 'react-native-paper';
import UploadWallpaperTagsInput from './UploadWallpaperTagsInput';
import useUploadWallpaperController from '../controllers/useUploadWallpaperController';

function UploadWallpaperDetailsInput() {
  const [isMatureContent, setIsMatureContent] = useState(false);
  const {setIsMatureContent: setStoreMatureContent} =
    useUploadWallpaperController();

  useEffect(() => {
    setStoreMatureContent(isMatureContent);
  }, [isMatureContent, setStoreMatureContent]);

  return (
    <View style={styles.container}>
      <TextInput placeholder="Enter Title" />
      <TextInput placeholder="Enter Author Name (Optional)" />
      <TextInput placeholder="Original Image Link (Optional)" />
      <UploadWallpaperTagsInput isMatureContent={isMatureContent} />
      <List.Item
        title="This Image Contains Adult Content"
        onPress={() => setIsMatureContent(p => !p)}
        left={() => (
          <Checkbox
            status={isMatureContent ? 'checked' : 'unchecked'}
            onPress={() => setIsMatureContent(p => !p)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: DefaultStyles.SPACING * 2,
    marginVertical: DefaultStyles.SPACING * 2,
    paddingHorizontal: DefaultStyles.SPACING,
  },
});

export default UploadWallpaperDetailsInput;
