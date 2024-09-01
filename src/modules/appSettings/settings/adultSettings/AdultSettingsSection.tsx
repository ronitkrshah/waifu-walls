/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {List} from 'react-native-paper';
import ShowAdultImageSwitch from './showAdultImages/ShowAdultImageSwitch';
import {useAppTheme} from '@app/theme/MaterialYouTheme';
import {StyleSheet} from 'react-native';

function AdultSettingsSection() {
  const {colors} = useAppTheme();

  return (
    <List.Section
      title="Adult Settings"
      titleStyle={{color: colors.primary, ...styles.titleStyle}}>
      <ShowAdultImageSwitch />
    </List.Section>
  );
}

const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: 'bold',
  },
});

export default AdultSettingsSection;
