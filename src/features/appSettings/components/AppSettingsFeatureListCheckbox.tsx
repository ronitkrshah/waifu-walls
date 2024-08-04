/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {List, Switch} from 'react-native-paper';
import AppSettings from '../types/AppSettings';
import {memo} from 'react';
import {StyleSheet} from 'react-native';
import {DefaultStyles} from '@app/utils/constants/style';
import {useAppTheme} from '@app/theme/MaterialYouTheme';

type Props = {
  feature: AppSettings;
};

function AppSettingsFeatureListCheckbox({feature}: Props) {
  const {colors} = useAppTheme();

  return (
    <List.Item
      contentStyle={styles.contentStyle}
      title={feature.title}
      titleStyle={{
        color: feature.disabled ? colors.onSurfaceDisabled : undefined,
        fontSize: DefaultStyles.SETTINGS_FEATURE_TITLE_SIZE,
      }}
      descriptionStyle={{
        color: feature.disabled ? colors.onSurfaceDisabled : undefined,
      }}
      description={feature.subtitle}
      disabled={feature.disabled}
      onPress={!feature.disabled ? feature.onPress : undefined}
      right={() =>
        CheckButton(feature.onPress, feature.isEnabled, feature.disabled)
      }
    />
  );
}

function CheckButton(
  onPress: AppSettings['onPress'],
  value: AppSettings['isEnabled'],
  disabled: AppSettings['disabled'],
) {
  return <Switch onChange={onPress} value={value} disabled={disabled} />;
}

const styles = StyleSheet.create({
  contentStyle: {
    marginRight: DefaultStyles.SPACING / 2,
  },
});

export default memo(AppSettingsFeatureListCheckbox);
