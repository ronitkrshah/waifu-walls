/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import AppSearchBar from '@app/components/screens/BottomTab/WaifusTab/AppSearchBar';
import {DefaultStyles} from '@app/utils/constants/style';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function WaifusTab() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <AppSearchBar />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: DefaultStyles.SPACING,
    paddingHorizontal: DefaultStyles.SPACING,
  },
});

export default WaifusTab;
