import InputBox, {InputBoxRef} from '@app/components/common/InputBox';
import {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import LoginButton from './LoginButton';

function UserInput() {
  const emailRef = useRef<InputBoxRef>(null);
  const passwordRef = useRef<InputBoxRef>(null);

  return (
    <View style={styles.container}>
      <InputBox mode="outlined" ref={emailRef} placeholder="Enter Email" />
      <InputBox
        mode="outlined"
        ref={passwordRef}
        placeholder="Enter Password"
      />
      <LoginButton emailRef={emailRef} passwordRef={passwordRef} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    gap: 12,
  },
});

export default UserInput;
