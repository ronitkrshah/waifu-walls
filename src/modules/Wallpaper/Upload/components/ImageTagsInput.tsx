/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {FlavorsList} from '@core/constants';
import {Fragment, memo} from 'react';
import {Checkbox, List} from 'react-native-paper';
import {useUpload} from '../hooks';
import SelectableImageTags from './SelectableImageTags';

function ImageTagsInput() {
  const {isMatureContent, toggleIsMatureContent} = useUpload();

  const tagList = isMatureContent ? FlavorsList.NSFW : FlavorsList.SFW;

  return (
    <Fragment>
      <SelectableImageTags tagList={tagList} />

      <List.Item
        title="This Image Contains Adult Content"
        onPress={toggleIsMatureContent}
        left={() => LeftCheckBox(isMatureContent, toggleIsMatureContent)}
      />
    </Fragment>
  );
}

/** Check Box */
function LeftCheckBox(isMatureContent: boolean, onPress: () => void) {
  return (
    <Checkbox
      status={isMatureContent ? 'checked' : 'unchecked'}
      onPress={onPress}
    />
  );
}

export default memo(ImageTagsInput);
