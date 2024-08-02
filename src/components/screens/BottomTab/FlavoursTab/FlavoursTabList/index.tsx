/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {DefaultStyles} from '@app/utils/constants/style';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';

type Props = {
  list: string[];
};

const {width: SCREEN_WIDTH, height: SCREN_HEIGHT} = Dimensions.get('screen');

function FlavoursTabList({list}: Props) {
  return (
    <View style={styles.rootContainer}>
      {list.map((item, index) => (
        <Button
          key={`${index}-${item}`}
          mode={index % 2 === 0 ? 'contained-tonal' : 'text'}>
          {item}
        </Button>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    width: SCREEN_WIDTH,
    minHeight: SCREN_HEIGHT,
    paddingHorizontal: DefaultStyles.SPACING * 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: DefaultStyles.SPACING,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FlavoursTabList;
