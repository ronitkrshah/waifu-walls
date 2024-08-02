/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import MatureContentAgreementControls from '@app/features/matureContentAgreement/components/MatureContentAgreementControls';
import {DefaultStrings} from '@app/utils/constants/strings';
import {DefaultStyles} from '@app/utils/constants/style';
import {StyleSheet, View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';

function SetupWizardScreen() {
  const {colors} = useTheme();
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
          style={[
            {
              color: colors.error,
            },
            styles.textUnderline,
          ]}>
          Disclaimer
        </Text>
        <Text variant="bodyLarge">
          {DefaultStrings.MATURE_CONTENT_DISCLAIMER}
        </Text>
      </View>
      <MatureContentAgreementControls />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: DefaultStyles.SPACING,
    gap: DefaultStyles.SPACING,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: DefaultStyles.SPACING * 2,
  },
  disclaimerContainer: {
    gap: DefaultStyles.SPACING * 0.8,
  },
  textUnderline: {textDecorationLine: 'underline'},
});

export default SetupWizardScreen;
