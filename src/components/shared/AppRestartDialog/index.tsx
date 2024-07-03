import {StyleSheet} from 'react-native';
import {Button, Dialog, Portal, Text} from 'react-native-paper';
import RNRestart from 'react-native-restart';

type Props = {
  visible: boolean;
};

function AppRestartDialog({visible}: Props) {
  function restartApp() {
    RNRestart.restart();
  }

  return (
    <Portal>
      <Dialog
        visible={visible}
        dismissable={false}
        dismissableBackButton={false}>
        <Dialog.Title>App Restart Required!</Dialog.Title>
        <Dialog.Content>
          <Text>
            You'll need to restart the app for the updated settings to take
            effect.
          </Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button
            onPress={restartApp}
            mode="contained"
            style={styles.restartBtn}>
            Restart
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}

const styles = StyleSheet.create({
  restartBtn: {
    paddingHorizontal: 16,
  },
});

export default AppRestartDialog;
