/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {DefaultStrings} from '@app/utils/constants/strings';
import {DefaultStyles} from '@app/utils/constants/style';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Surface} from 'react-native-paper';
import Headline from '../Headline';
import RegisterHandler from '@app/features/auth/components/RegisterHandler';

const {width: SCREEN_WIDTH} = Dimensions.get('screen');

function RegisterPage() {
  return (
    <View style={styles.rootContainer}>
      <Surface style={styles.surfaceContainer}>
        <Headline
          title={DefaultStrings.SIGN_UP_TITLE}
          subtitle={DefaultStrings.SIGN_UP_GREETING}
        />
        <RegisterHandler />
      </Surface>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    width: SCREEN_WIDTH,
    paddingTop: DefaultStyles.SPACING,
  },
  surfaceContainer: {
    marginHorizontal: 'auto',
    width: SCREEN_WIDTH - DefaultStyles.SPACING * 2,
    borderRadius: DefaultStyles.SPACING * 2,
    padding: DefaultStyles.SPACING,
  },
});

export default RegisterPage;
