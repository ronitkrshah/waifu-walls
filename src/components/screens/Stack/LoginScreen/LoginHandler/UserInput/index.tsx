import InputBox, {InputBoxRef} from '@app/components/common/InputBox';
import {useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import LoginButton from './LoginButton';
import {Checkbox} from 'react-native-paper';

function UserInput() {
  const [acceptedTNC, setAcceptedTNC] = useState(false);
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
      <Checkbox.Item
        status={acceptedTNC ? 'checked' : 'unchecked'}
        onPress={() => setAcceptedTNC((prev) => !prev)}
        label="Accept Terms & Conditions"
      />
      <LoginButton
        tncChecked={acceptedTNC}
        emailRef={emailRef}
        passwordRef={passwordRef}
      />
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
