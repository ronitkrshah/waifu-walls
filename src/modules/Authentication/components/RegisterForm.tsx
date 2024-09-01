/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {StyleSheet, View} from 'react-native';
import AuthTextInput from '../shared/components/AuthTextInput';
import {
  ActivityIndicator,
  Button,
  Dialog,
  Portal,
  Text,
} from 'react-native-paper';
import {DefaultStyles} from '@app/utils/constants/style';
import {useRegister} from '../hooks';
import {Fragment} from 'react';

function RegisterForm() {
  const {form, isCreating} = useRegister();
  return (
    <Fragment>
      <View style={styles.container}>
        <AuthTextInput
          placeholder="Enter Your Name"
          value={form.values.name}
          onChangeText={form.handleChange('name')}
        />
        {form.touched.name && form.errors.name && (
          <Text>{form.errors.name}</Text>
        )}
        <AuthTextInput
          placeholder="Enter Email"
          value={form.values.email}
          onChangeText={form.handleChange('email')}
        />
        {form.touched.email && form.errors.email && (
          <Text>{form.errors.email}</Text>
        )}
        <AuthTextInput
          placeholder="Enter Password"
          secureTextEntry
          value={form.values.password}
          onChangeText={form.handleChange('password')}
        />
        {form.touched.password && form.errors.password && (
          <Text>{form.errors.password}</Text>
        )}
        <Button mode="contained" onPress={() => form.handleSubmit()}>
          Sign Up
        </Button>
      </View>
      <ShowStatus visible={isCreating} />
    </Fragment>
  );
}

/** Portal For Showing Status */
type Props = {
  visible: boolean;
};

function ShowStatus({visible}: Props) {
  return (
    <Portal>
      <Dialog visible={visible} dismissable={false}>
        <Dialog.Content>
          <ActivityIndicator animating size={'large'} />
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: DefaultStyles.SPACING * 0.8,
    marginVertical: DefaultStyles.SPACING,
  },
});

export default RegisterForm;
