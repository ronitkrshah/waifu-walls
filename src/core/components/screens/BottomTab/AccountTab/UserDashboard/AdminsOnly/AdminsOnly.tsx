/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {useAppTheme} from '@app/core/theme/MaterialYouTheme';
import AdminControlsButton from './AdminControlsButton';
import {StyleSheet, View} from 'react-native';
import {AppSizes} from '@core/constants';

function AdminsOnly() {
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
      <AdminControlsButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: AppSizes.spacing * 0.6,
    paddingHorizontal: AppSizes.spacing,
    borderRadius: AppSizes.spacing * 2,
    gap: AppSizes.spacing * 0.4,
  },
});

export default AdminsOnly;
