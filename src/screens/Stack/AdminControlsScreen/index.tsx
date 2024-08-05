/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {Appbar} from 'react-native-paper';

function AdminControlsScreen() {
  return null;
}

/** Appbar */
AdminControlsScreen.Appbar = function MyAppbar({
  navigation,
}: NativeStackHeaderProps) {
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={navigation.goBack} />
      <Appbar.Content title="Admin Controls" />
    </Appbar.Header>
  );
};

export default AdminControlsScreen;
