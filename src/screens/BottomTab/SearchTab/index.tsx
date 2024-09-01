/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import SearchFeature from '@app/modules/search/components/SearchFeature';
import {DefaultStyles} from '@app/utils/constants/style';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function SearchTab() {
  return (
    <SafeAreaView style={styles.container}>
      <SearchFeature />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: DefaultStyles.SPACING,
    paddingTop: DefaultStyles.SPACING,
  },
});

export default SearchTab;
