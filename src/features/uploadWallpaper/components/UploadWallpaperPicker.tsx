/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {DefaultStyles} from '@app/utils/constants/style';
import {Fragment} from 'react';
import {Dimensions, Image, Pressable, StyleSheet, View} from 'react-native';
import {Icon, Text} from 'react-native-paper';
import useUploadWallpaperController from '../controllers/useUploadWallpaperController';
import {useAppTheme} from '@app/theme/MaterialYouTheme';

const {width: SCREEN_WIDTH} = Dimensions.get('screen');
const IMG_HEIGHT = SCREEN_WIDTH * 1.3;

function UploadWallpaperPicker() {
  const {chooseImage, wallpaperUri} = useUploadWallpaperController();
  const {colors} = useAppTheme();

  return (
    <Pressable
      onPress={chooseImage}
      style={[{backgroundColor: colors.surfaceVariant}, styles.pressable]}>
      {wallpaperUri === '' ? (
        <Icon size={100} source={'image'} />
      ) : (
        <Fragment>
          <Image
            resizeMode="cover"
            source={{uri: wallpaperUri}}
            style={StyleSheet.absoluteFillObject}
          />
          <View style={[styles.imageChangeContainer]}>
            <Text variant="titleMedium" style={styles.imageChangeText}>
              Tap On Image To Change
            </Text>
          </View>
        </Fragment>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    width: SCREEN_WIDTH - DefaultStyles.SPACING * 2,
    height: IMG_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 'auto',
    borderRadius: DefaultStyles.SPACING * 3,
    overflow: 'hidden',
  },
  imageChangeContainer: {
    padding: DefaultStyles.SPACING,
    borderRadius: DefaultStyles.SPACING,
    backgroundColor: 'hsla(0, 0%, 0%, 0.43)',
  },
  imageChangeText: {
    color: 'hsla(360, 100%, 100%, 0.82)',
  },
});

export default UploadWallpaperPicker;
