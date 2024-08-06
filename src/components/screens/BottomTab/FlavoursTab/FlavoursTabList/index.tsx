/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  BottomTabNavigationProp,
  BottomTabNavigationRoutes,
  SearchScreenSearchType,
  StackNavigationRoutes,
} from '@app/types/navigation';
import {DefaultStyles} from '@app/utils/constants/style';
import {useNavigation} from '@react-navigation/native';
import {Fragment, useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';

type Props = {
  list: string[];
};

const {width: SCREEN_WIDTH, height: SCREN_HEIGHT} = Dimensions.get('screen');

function FlavoursTabList({list}: Props) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const navigation =
    useNavigation<
      BottomTabNavigationProp<BottomTabNavigationRoutes.FLAVOURS>
    >();

  /** Insert tags to selected list */
  function insertTagInSelectedTags(tag: string) {
    let _currentTags = selectedTags;
    if (_currentTags.includes(tag)) {
      _currentTags = _currentTags.filter(item => item !== tag);
    } else {
      _currentTags.push(tag);
    }
    setSelectedTags([..._currentTags]);
  }

  /** Will navigate with single element array */
  function handleSingleTagPress(tag: string) {
    if (selectedTags.length > 0) {
      insertTagInSelectedTags(tag);
    } else {
      navigation.push(StackNavigationRoutes.SEARCH_RESULTS_SCREEN, {
        type: SearchScreenSearchType.TAGS,
        query: [tag],
      });
    }
  }

  /** Handle Search Button */
  function handleSearchPress() {
    navigation.push(StackNavigationRoutes.SEARCH_RESULTS_SCREEN, {
      type: SearchScreenSearchType.TAGS,
      query: selectedTags,
    });
  }

  return (
    <Fragment>
      <View style={styles.rootContainer}>
        <View style={styles.listContainer}>
          {list.map((item, index) => (
            <Button
              icon={selectedTags.includes(item) ? 'heart' : undefined}
              onPress={() => handleSingleTagPress(item)}
              onLongPress={() => insertTagInSelectedTags(item)}
              key={`${index}-${item}`}
              mode={index % 2 === 0 ? 'contained-tonal' : 'text'}>
              {item}
            </Button>
          ))}
        </View>
        {selectedTags.length > 0 && (
          <Button mode="contained" onPress={handleSearchPress}>
            Search
          </Button>
        )}
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    width: SCREEN_WIDTH,
    minHeight: SCREN_HEIGHT,
    paddingHorizontal: DefaultStyles.SPACING * 2,
    gap: DefaultStyles.SPACING * 2,
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: DefaultStyles.SPACING,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FlavoursTabList;
