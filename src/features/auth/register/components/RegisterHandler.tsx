/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {StyleSheet, View} from 'react-native';
import AuthTextInput from '../../shared/components/AuthTextInput';
import {Button} from 'react-native-paper';
import {DefaultStyles} from '@app/utils/constants/style';

function RegisterHandler() {
  return (
    <View style={styles.container}>
      <AuthTextInput placeholder="Enter Your Name" />
      <AuthTextInput placeholder="Enter Email" />
      <AuthTextInput placeholder="Enter Password" secureTextEntry />
      <Button mode="contained">Sign Up</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: DefaultStyles.SPACING * 0.8,
    marginVertical: DefaultStyles.SPACING,
  },
});

export default RegisterHandler;