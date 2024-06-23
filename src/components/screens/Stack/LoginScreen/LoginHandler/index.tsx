import {StyleSheet} from 'react-native';
import {Surface} from 'react-native-paper';
import Headline from './Headline';
import UserInput from './UserInput';
import CreateAccount from './CreateAccount';

function LoginHandler() {
  return (
    <Surface style={styles.surface}>
      <Headline />
      <UserInput />
      <CreateAccount />
    </Surface>
  );
}

const styles = StyleSheet.create({
  surface: {
    width: '80%',
    borderRadius: 30,
    paddingVertical: 24,
    paddingHorizontal: 18,
  },
});

export default LoginHandler;
