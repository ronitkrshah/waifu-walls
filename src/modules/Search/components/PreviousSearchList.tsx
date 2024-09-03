/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {useGlobalStore} from '@core/store';
import {
  BottomTabNavigationProp,
  BottomTabNavigationRoutes,
  SearchScreenSearchType,
  StackNavigationRoutes,
} from '@app/navigation/types';
import {AppSizes} from '@core/constants';
import {useNavigation} from '@react-navigation/native';
import {memo} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {List} from 'react-native-paper';
import Animated, {FadeIn} from 'react-native-reanimated';
import {useShallow} from 'zustand/react/shallow';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function PreviousSearchList() {
  const previousSearch = useGlobalStore(
    useShallow(state => ({
      list: state.previousSearchs,
      remove: state.removeSearch,
    })),
  );

  return (
    <FlatList
      data={previousSearch.list}
      contentContainerStyle={styles.container}
      renderItem={({item, index}) => <ListItem search={item} index={index} />}
    />
  );
}

/** List Item */
const AList = Animated.createAnimatedComponent(List.Item);

const ListItem = memo(function ({
  search,
  index,
}: {
  search: string;
  index: number;
}) {
  const remove = useGlobalStore(state => state.removeSearch);
  const navigation =
    useNavigation<BottomTabNavigationProp<BottomTabNavigationRoutes.SEARCH>>();

  function handleDelete() {
    remove(search);
  }

  function handlePress() {
    navigation.push(StackNavigationRoutes.SEARCH_RESULTS_SCREEN, {
      query: search,
      type: SearchScreenSearchType.QUERY,
    });
  }
  return (
    <AList
      entering={FadeIn.duration(200 * index)}
      title={search}
      onLongPress={handleDelete}
      onPress={handlePress}
      right={() => (
        <MaterialCommunityIcons name="close" size={24} onPress={handleDelete} />
      )}
    />
  );
});

const styles = StyleSheet.create({
  container: {
    borderRadius: AppSizes.spacing,
    overflow: 'hidden',
    marginTop: 10,
  },
});

export default PreviousSearchList;
