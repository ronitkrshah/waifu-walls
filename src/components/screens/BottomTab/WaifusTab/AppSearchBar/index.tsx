/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  BottomTabNavigationRoutes,
  BottomTabUseNavigation,
} from '@app/types/navigation';
import {DefaultStrings} from '@app/utils/constants/strings';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Searchbar, useTheme} from 'react-native-paper';

function AppSearchBar() {
  const [query, setQuery] = useState('');
  const {colors} = useTheme();
  const navigation = useNavigation<BottomTabUseNavigation>();

  function onFilterPress() {
    navigation.jumpTo(BottomTabNavigationRoutes.FLAVOURS);
  }

  function onSubmitQuery() {
    console.log(query);
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
