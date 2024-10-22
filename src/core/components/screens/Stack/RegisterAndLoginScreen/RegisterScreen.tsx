/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {DefaultStrings, AppSizes} from '@core/constants';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Surface} from 'react-native-paper';
import Headline from './Headline';
import {AuthenticationModule} from '@app/modules';

const {width: SCREEN_WIDTH} = Dimensions.get('screen');

function RegisterScreen() {
  return (
    <View style={styles.rootContainer}>
      <Surface style={styles.surfaceContainer}>
        <Headline
          title={DefaultStrings.SIGN_UP_TITLE}
          subtitle={DefaultStrings.SIGN_UP_GREETING}
        />
        <AuthenticationModule.RegisterForm />
      </Surface>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    width: SCREEN_WIDTH,
    paddingTop: AppSizes.spacing,
  },
  surfaceContainer: {
    marginHorizontal: 'auto',
    width: SCREEN_WIDTH - AppSizes.spacing * 2,
    borderRadius: AppSizes.spacing * 2,
    padding: AppSizes.spacing,
  },
});

export default RegisterScreen;
