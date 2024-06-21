import {StyleSheet} from 'react-native';
import {Surface} from 'react-native-paper';
import Headline from './Headline';
import UserInput from './UserInput';

function LoginHandler() {
  return (
    <Surface style={styles.surface}>
      <Headline />
      <UserInput />
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
