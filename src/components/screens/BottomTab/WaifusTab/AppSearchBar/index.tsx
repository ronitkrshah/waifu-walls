/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {useAppTheme} from '@app/theme/MaterialYouTheme';
import {
  BottomTabNavigationProp,
  BottomTabNavigationRoutes,
  SearchScreenSearchType,
  StackNavigationRoutes,
} from '@app/types/navigation';
import {DefaultStrings} from '@app/utils/constants/strings';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Searchbar} from 'react-native-paper';

function AppSearchBar() {
  const [query, setQuery] = useState('');
  const {colors} = useAppTheme();
  const navigation =
    useNavigation<BottomTabNavigationProp<BottomTabNavigationRoutes.WAIFUS>>();

  function onFilterPress() {
    navigation.jumpTo(BottomTabNavigationRoutes.FLAVOURS);
  }

  function onSubmitQuery() {
    setQuery('');
    navigation.push(StackNavigationRoutes.SEARCH_RESULTS_SCREEN, {
      type: SearchScreenSearchType.QUERY,
      query,
    });
  }

  return (
    <Searchbar
      value={query}
      onChangeText={setQuery}
      placeholder={DefaultStrings.SEARCH_BAR_PLACEHOLDER}
      placeholderTextColor={colors.onSurfaceVariant}
      traileringIcon={'filter-variant'}
      onTraileringIconPress={onFilterPress}
      selectionColor={colors.inversePrimary}
      onSubmitEditing={onSubmitQuery}
    />
  );
}

export default AppSearchBar;
