/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import AccountTabLoginBox from '@app/components/screens/BottomTab/AccountTab/AccountTabLoginBox';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function AccountTab() {
  return (
    <SafeAreaView style={styles.flex}>
      <AccountTabLoginBox />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default AccountTab;
