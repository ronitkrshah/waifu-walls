/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {AppSizes} from '@core/constants';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useState} from 'react';
import ImageTagsInput from './ImageTagsInput';
import {useTextFields} from '../hooks';

function ImageDetailFields() {
  const {updateImageTitle, updateOriginalAuthor, updateOriginalPostLink} =
    useTextFields();
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
    gap: AppSizes.spacing * 2,
    marginVertical: AppSizes.spacing * 2,
    paddingHorizontal: AppSizes.spacing,
  },
});

export default ImageDetailFields;
