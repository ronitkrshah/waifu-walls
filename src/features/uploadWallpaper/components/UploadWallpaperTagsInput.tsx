/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {NSFWList} from '@app/utils/constants/NSFWList';
import {SFWList} from '@app/utils/constants/SFWList';
import {Fragment, memo} from 'react';
import {Checkbox, List} from 'react-native-paper';
import useUploadWallpaperController from '../controllers/useUploadWallpaperController';
import UploadWallpaperSelectImageTags from './UploadWallpaperSelectImageTags';

function UploadWallpaperTagsInput() {
  const {isMatureContent, setIsMatureContent} = useUploadWallpaperController();

  const tagList = isMatureContent ? NSFWList : SFWList;

  return (
    <Fragment>
      <UploadWallpaperSelectImageTags tagList={tagList} />

      <List.Item
        title="This Image Contains Adult Content"
        onPress={() => setIsMatureContent(!isMatureContent)}
        left={() =>
          LeftCheckBox(isMatureContent, () =>
            setIsMatureContent(!isMatureContent),
          )
        }
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

export default memo(UploadWallpaperTagsInput);
