/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  SearchScreenSearchType,
  StackNavigationParamList,
  StackNavigationRoutes,
} from '@app/types/navigation';
import {RouteProp} from '@react-navigation/native';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {Appbar} from 'react-native-paper';

function SearchResultsScreen() {
  return null;
}

/** Appbar For SearchResultsScreen */
SearchResultsScreen.Appbar = function MyAppBar({
  navigation,
  route,
}: NativeStackHeaderProps) {
  const typedRoute = route as RouteProp<
    StackNavigationParamList,
    StackNavigationRoutes.SEARCH_RESULTS_SCREEN
  >;

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={navigation.goBack} />
      <Appbar.Content
        title={
          typedRoute.params.type === SearchScreenSearchType.QUERY
            ? typedRoute.params.query
            : 'Search Results'
        }
      />
    </Appbar.Header>
  );
};

export default SearchResultsScreen;