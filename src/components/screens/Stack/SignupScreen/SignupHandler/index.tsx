import {ScrollView, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Headline from './Headline';
import UserInput from './UserInput';

function SignupHandler() {
  const insets = useSafeAreaInsets();
  return (
    <>
      <ScrollView
        contentContainerStyle={styles.container}
        style={{...styles.scrollview, paddingTop: insets.top + 40}}>
        <Headline />
        <UserInput />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollview: {
    paddingHorizontal: 16,
  },
  container: {
    gap: 16,
  },
});

export default SignupHandler;
