import {DefaultStyles} from '@app/utils/constants/style';
import {StyleSheet, View} from 'react-native';
import {Chip, Text} from 'react-native-paper';
import useUploadWallpaperController from '../controllers/useUploadWallpaperController';
import {Fragment} from 'react';
import {useAppTheme} from '@app/theme/MaterialYouTheme';

type Props = {
  tagList: string[];
};

function UploadWallpaperSelectImageTags({tagList}: Props) {
  const {imageTags, updateSelectedTags} = useUploadWallpaperController();
  const {colors} = useAppTheme();

  return (
    <Fragment>
      <Text variant="titleMedium">Select Tags</Text>
      <View style={styles.container}>
        {tagList.map(item => {
          let _isSelected = imageTags.includes(item);
          return (
            <Chip
              key={item}
              selectedColor={_isSelected ? colors.primary : undefined}
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

export default UploadWallpaperSelectImageTags;
