/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {AgreementModule} from '@app/modules';
import {useAppTheme} from '@app/core/theme/MaterialYouTheme';
import {DefaultStrings, AppSizes} from '@core/constants';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

function SetupWizardScreen() {
  const {colors} = useAppTheme();
  return (
    <View style={styles.rootContainer}>
      <View style={styles.titleContainer}>
        <Text variant="titleLarge">Welcome to, </Text>
        <Text variant="headlineLarge" style={[{color: colors.primary}]}>
          {DefaultStrings.APP_NAME}
        </Text>
      </View>

      <View style={styles.disclaimerContainer}>
        <Text
          variant="headlineSmall"
          style={[{color: colors.error}, styles.textUnderline]}>
          Disclaimer
        </Text>
        <Text variant="bodyLarge">
          {DefaultStrings.MATURE_CONTENT_DISCLAIMER}
        </Text>
      </View>

      {/** Checkboxes for user agreement */}
      <AgreementModule.AgreementChecks />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: AppSizes.spacing,
    gap: AppSizes.spacing,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: AppSizes.spacing * 2,
  },
  disclaimerContainer: {
    gap: AppSizes.spacing * 0.8,
  },
  textUnderline: {textDecorationLine: 'underline'},
});

export default SetupWizardScreen;
