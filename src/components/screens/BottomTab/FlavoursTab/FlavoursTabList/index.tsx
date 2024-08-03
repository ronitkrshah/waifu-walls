/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {DefaultStyles} from '@app/utils/constants/style';
import {Dimensions, FlatList, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

type Props = {
  list: string[];
};

const {width: SCREEN_WIDTH} = Dimensions.get('screen');

function FlavoursTabList({list}: Props) {
  return (
    <FlatList
      data={list}
      numColumns={SCREEN_WIDTH > 700 ? 5 : 3}
      columnWrapperStyle={styles.columnWrapper}
      contentContainerStyle={styles.rootContainer}
      renderItem={({item, index}) => (
        <Button mode={index % 2 === 0 ? 'contained-tonal' : 'text'}>
          {item}
        </Button>
      )}
      keyExtractor={item => item}
    />
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    width: SCREEN_WIDTH,
    paddingHorizontal: DefaultStyles.SPACING * 2,
    gap: DefaultStyles.SPACING,
    alignItems: 'center',
  },
  columnWrapper: {
    gap: DefaultStyles.SPACING,
  },
});

export default FlavoursTabList;
