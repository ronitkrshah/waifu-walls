import UploadImageHandler from '@app/components/screens/Stack/UploadImageScreen/UploadImageHandler';
import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function UploadImageScreen() {
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView style={styles.keyboardAvoid} behavior="height">
      <View style={{paddingTop: insets.top}} />
      <UploadImageHandler />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardAvoid: {
    flex: 1,
    paddingBottom: 40,
  },
});

export default UploadImageScreen;
