/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {NSFWList} from '@app/utils/constants/NSFWList';
import {SFWList} from '@app/utils/constants/SFWList';
import {DefaultStyles} from '@app/utils/constants/style';
import {Fragment, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Chip, Text} from 'react-native-paper';
import useUploadWallpaperController from '../controllers/useUploadWallpaperController';

type Props = {
  isMatureContent: boolean;
};

function UploadWallpaperTagsInput({isMatureContent}: Props) {
  const [tagList, setTagList] = useState<string[]>([]);
  const {imageTags, updateSelectedTags} = useUploadWallpaperController();

  useEffect(() => {
    setTagList(isMatureContent ? NSFWList : SFWList);
  }, [isMatureContent]);

  return (
    <Fragment>
      <Text variant="titleMedium">Select Tags</Text>
      <View style={styles.container}>
        {tagList.map(item => {
          let _isSelected = imageTags.includes(item);
          return (
            <Chip
              key={item}
              icon={_isSelected ? 'heart' : undefined}
              onPress={() => updateSelectedTags(item)}
              selected={_isSelected}>
              {item}
            </Chip>
          );
        })}
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: DefaultStyles.SPACING,
    justifyContent: 'center',
  },
});

export default UploadWallpaperTagsInput;
