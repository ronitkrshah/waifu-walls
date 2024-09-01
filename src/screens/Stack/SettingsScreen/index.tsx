/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import AppSettingsFeature from '@app/modules/appSettings/components/AppSettingsFeature';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {Appbar} from 'react-native-paper';

function SettingsScreen() {
  return <AppSettingsFeature />;
}

/** Appbar */
SettingsScreen.Appbar = function MyAppbar({
  navigation,
}: NativeStackHeaderProps) {
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={navigation.goBack} />
      <Appbar.Content title="Settings" />
    </Appbar.Header>
  );
};

export default SettingsScreen;
