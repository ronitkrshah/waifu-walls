import LoginHandler from '@app/components/screens/Stack/LoginScreen/LoginHandler';
import {StyleSheet, View} from 'react-native';

function LoginScreen() {
  return (
    <View style={styles.container}>
      <LoginHandler />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
