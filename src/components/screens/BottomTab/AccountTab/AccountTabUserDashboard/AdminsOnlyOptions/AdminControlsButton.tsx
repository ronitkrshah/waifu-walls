/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  BottomTabNavigationProp,
  BottomTabNavigationRoutes,
  StackNavigationRoutes,
} from '@app/types/navigation';
import {useNavigation} from '@react-navigation/native';
import {Fragment, useState} from 'react';
import {Button, Dialog, Portal, Text} from 'react-native-paper';

function AdminControlsButton() {
  const [showWarning, setShowWarning] = useState(false);

  const navigation =
    useNavigation<BottomTabNavigationProp<BottomTabNavigationRoutes.ACCOUNT>>();

  function goToAdminScreen() {
    navigation.push(StackNavigationRoutes.ADMIN_CONTROLS_SCREEN);
  }

  function dismissDialog() {
    setShowWarning(false);
  }

  function onPress() {
    setShowWarning(true);
  }

  return (
    <Fragment>
      <Button icon={'shield-account-variant'} onPress={onPress}>
        Admin Controls
      </Button>
      <WarningDialog
        visible={showWarning}
        onDismiss={dismissDialog}
        onProceed={goToAdminScreen}
      />
    </Fragment>
  );
}

/** Confirmation Dialog */
type WarningDialogProps = {
  visible: boolean;
  onProceed(): void;
  onDismiss(): void;
};

function WarningDialog({visible, onProceed, onDismiss}: WarningDialogProps) {
  function handleProceed() {
    onDismiss();
    onProceed();
  }

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Title>Warning!!</Dialog.Title>
        <Dialog.Content>
          <Text>
            You are about to access admin controls. This action could
            potentially impact core features of the app. Are you sure you want
            to proceed?
          </Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onDismiss}>Go Back</Button>
          <Button onPress={handleProceed}>I Know What I'm Doing</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}

export default AdminControlsButton;
