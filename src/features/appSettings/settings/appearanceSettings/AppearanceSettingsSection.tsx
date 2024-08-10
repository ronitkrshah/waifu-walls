/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {List} from 'react-native-paper';
import {useAppTheme} from '@app/theme/MaterialYouTheme';
import {StyleSheet} from 'react-native';
import CustomPreviewScreenSwitch from './CustomPreviewScreen/CustomPreviewScreenSwitch';

function AppearanceSettingsSection() {
  const {colors} = useAppTheme();

  return (
    <List.Section
      title="Appearance"
      titleStyle={{color: colors.primary, ...styles.titleStyle}}>
      <CustomPreviewScreenSwitch />
    </List.Section>
  );
}

const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: 'bold',
  },
});

export default AppearanceSettingsSection;
