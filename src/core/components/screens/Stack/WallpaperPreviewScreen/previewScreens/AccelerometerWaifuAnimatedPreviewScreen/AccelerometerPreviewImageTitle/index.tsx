/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {AppSizes} from '@core/constants';
import {StyleSheet} from 'react-native';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = {
  title: string;
};

function AccelerometerPreviewImageTitle({title}: Props) {
  const {top} = useSafeAreaInsets();

  return (
    <Animated.Text
      entering={FadeInDown.duration(600)}
      style={[{top: top + AppSizes.spacing * 1.5}, styles.text]}>
      {title.toUpperCase()}
    </Animated.Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: AppSizes.spacing * 2.4,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    color: 'hsla(360, 100%, 100%, 0.68)',
  },
});

export default AccelerometerPreviewImageTitle;
