/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {List} from 'react-native-paper';
import {useAppTheme} from '@app/theme/MaterialYouTheme';
import {Platform, StyleSheet} from 'react-native';
import CustomPreviewScreenSwitch from './CustomPreviewScreenSwitch';
import CustomTheme from './CustomTheme';
import SizedBox from '@app/components/common/SizedBox';
import {Fragment} from 'react';

const ANDROID_API_VERSION = Platform.Version;

function AppearanceSettingsSection() {
  const {colors} = useAppTheme();

  return (
    <List.Section
      title="Appearance"
      titleStyle={{color: colors.primary, ...styles.titleStyle}}>
      <CustomPreviewScreenSwitch />

      {/** Show Custom Theme Colors Only if user is below android 12 */}
      {typeof ANDROID_API_VERSION === 'number' && ANDROID_API_VERSION < 31 && (
        <Fragment>
          <SizedBox vertical={20} />
          <CustomTheme />
        </Fragment>
      )}
    </List.Section>
  );
}

const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: 'bold',
  },
});

export default AppearanceSettingsSection;