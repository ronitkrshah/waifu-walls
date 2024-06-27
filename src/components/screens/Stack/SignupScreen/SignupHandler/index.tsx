import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Headline from './Headline';
import UserInput from './UserInput';

function SignupHandler() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{...styles.scrollview, paddingTop: insets.top + 40}}>
      <Headline />
      <UserInput />
    </View>
  );
}

const styles = StyleSheet.create({
  scrollview: {
    gap: 20,
    paddingHorizontal: 16,
  },
});

export default SignupHandler;
