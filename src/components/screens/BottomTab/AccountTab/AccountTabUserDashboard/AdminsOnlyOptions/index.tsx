/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {useAppTheme} from '@app/theme/MaterialYouTheme';
import AdminControlsButton from './AdminControlsButton';
import {StyleSheet, View} from 'react-native';
import {DefaultStyles} from '@app/utils/constants/style';
import PendingRequestsButton from './PendinRequestsButton';

function AdminsOnlyFeatures() {
  const theme = useAppTheme();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.dark
            ? theme.colors.secondaryContainer
            : theme.colors.primaryContainer,
        },
      ]}>
      <PendingRequestsButton />
      <AdminControlsButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: DefaultStyles.SPACING * 0.6,
    paddingHorizontal: DefaultStyles.SPACING,
    borderRadius: DefaultStyles.SPACING * 2,
    gap: DefaultStyles.SPACING * 0.4,
  },
});

export default AdminsOnlyFeatures;
