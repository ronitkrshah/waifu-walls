/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {List} from 'react-native-paper';
import {ShowAdultImages} from './ShowAdultImages';
import {useAppTheme} from '@app/core/theme/MaterialYouTheme';
import {StyleSheet} from 'react-native';

function AdultSettings() {
  const {colors} = useAppTheme();

  return (
    <List.Section
      title="Adult Settings"
      titleStyle={{color: colors.primary, ...styles.titleStyle}}>
      <ShowAdultImages />
    </List.Section>
  );
}

const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: 'bold',
  },
});

export default AdultSettings;
