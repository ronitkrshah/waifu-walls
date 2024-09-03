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
} from '@app/navigation/types';
import {useNavigation} from '@react-navigation/native';

export function useSuggestions() {
  const navigation =
    useNavigation<BottomTabNavigationProp<BottomTabNavigationRoutes.WAIFUS>>();

  /**
   * Navigate to Search Results Screen
   */
  function handleSuggestionPress(title: string) {
    navigation.push(StackNavigationRoutes.SEARCH_RESULTS_SCREEN, {
      type: SearchScreenSearchType.QUERY,
      query: title,
    });
  }

  return {
    handleSuggestionPress,
  };
}
