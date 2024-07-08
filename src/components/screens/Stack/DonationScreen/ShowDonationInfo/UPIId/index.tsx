import Clipboard from '@react-native-clipboard/clipboard';
import {StyleSheet, ToastAndroid, View} from 'react-native';
import {Button, Text, useTheme} from 'react-native-paper';

const UPI_ID = 'ronitkrshah@airtel';

function UPIId() {
  const {colors} = useTheme();
  function copyUpiId() {
    Clipboard.setString(UPI_ID);
    ToastAndroid.show('UPI Id Copied', ToastAndroid.LONG);
  }

  return (
    <View style={styles.container}>
      <Text variant="titleMedium">UPI Id</Text>
      <Button mode="contained-tonal" icon={'content-copy'} onPress={copyUpiId}>
        {UPI_ID}
      </Button>

      <Text
        variant="titleMedium"
        style={{color: colors.onSurfaceDisabled, ...styles.support}}>
        Your decision to contribute through a donation means the world to me.
        Thank you for your support!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  support: {
    textAlign: 'center',
  },
});

export default UPIId;
