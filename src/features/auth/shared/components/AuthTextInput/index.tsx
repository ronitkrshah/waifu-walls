/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {DefaultStyles} from '@app/utils/constants/style';
import {StyleSheet, TextInput} from 'react-native';
import {TextInputProps} from 'react-native';
import {useTheme} from 'react-native-paper';

function AuthTextInput(props: TextInputProps) {
  const {colors} = useTheme();
  return (
    <TextInput
      multiline={false}
      autoCorrect={false}
      selectionHandleColor={colors.primary}
      cursorColor={colors.primary}
      selectionColor={colors.inversePrimary}
      style={[
        {
          backgroundColor: colors.elevation.level4,
        },
        styles.textInput,
      ]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderRadius: DefaultStyles.SPACING * 2,
    paddingHorizontal: DefaultStyles.SPACING,
  },
});

export default AuthTextInput;
