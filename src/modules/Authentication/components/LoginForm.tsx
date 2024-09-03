/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {StyleSheet, View} from 'react-native';
import {
  ActivityIndicator,
  Button,
  Dialog,
  Portal,
  Text,
} from 'react-native-paper';
import {AppSizes} from '@core/constants';
import AuthTextInput from '../shared/components/AuthTextInput';
import useLogin from '../hooks/useLogin';
import {Fragment} from 'react';

function LoginForm() {
  const {form, isPending} = useLogin();

  return (
    <Fragment>
      <View style={styles.container}>
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
          Sign In
        </Button>
      </View>
      <ShowStatus visible={isPending} />
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
    gap: AppSizes.spacing * 0.8,
    marginVertical: AppSizes.spacing,
  },
});

export default LoginForm;
