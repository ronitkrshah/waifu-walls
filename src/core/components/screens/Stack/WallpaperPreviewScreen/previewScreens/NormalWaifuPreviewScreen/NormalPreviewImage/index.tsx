/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {AppSizes} from '@core/constants';
import {Dimensions, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, {FadeIn} from 'react-native-reanimated';

type Props = {
  uri: string;
};

const {width: SCREEN_WIDTH} = Dimensions.get('screen');
const AImage = Animated.createAnimatedComponent(FastImage);

function NormalPreviewImage({uri}: Props) {
  return (
    <AImage
      entering={FadeIn.duration(600)}
      source={{uri}}
      style={styles.image}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    height: SCREEN_WIDTH * 1.6,
    width: SCREEN_WIDTH - AppSizes.spacing * 2,
    marginHorizontal: 'auto',
    marginVertical: 'auto',
    borderRadius: AppSizes.spacing * 2,
  },
});

export default NormalPreviewImage;
