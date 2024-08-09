/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {DefaultStyles} from '@app/utils/constants/style';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useState} from 'react';
import ImageTagsInput from './ImageTagsInput';
import useUploadWallpaperController from '../controllers/useUploadWallpaperController';

function ImageDetailFields() {
  const {updateImageTitle, updateOriginalAuthor, updateOriginalPostLink} =
    useUploadWallpaperController();
  const [details, setDetails] = useState({
    title: '',
    author: '',
    originalLink: '',
  });

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Title"
        value={details.title}
        onChangeText={e =>
          setDetails(s => {
            updateImageTitle(e);
            return {...s, title: e};
          })
        }
      />
      <TextInput
        placeholder="Enter Author Name (Optional)"
        value={details.author}
        onChangeText={e =>
          setDetails(s => {
            updateOriginalAuthor(e);
            return {...s, author: e};
          })
        }
      />
      <TextInput
        value={details.originalLink}
        placeholder="Original Image Link (Optional)"
        onChangeText={e =>
          setDetails(s => {
            updateOriginalPostLink(e);
            return {...s, originalLink: e};
          })
        }
      />
      <ImageTagsInput />
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

export default ImageDetailFields;
