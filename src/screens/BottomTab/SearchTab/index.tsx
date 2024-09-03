/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {SearchModule} from '@app/modules';
import {AppSizes} from '@core/constants';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function SearchTab() {
  return (
    <SafeAreaView style={styles.container}>
      <SearchModule.SearchScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: AppSizes.spacing,
    paddingTop: AppSizes.spacing,
  },
});

export default SearchTab;
