import InputBox, {InputBoxRef} from '@app/components/common/InputBox';
import {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import SignupBtn from '../SignupButton';

export type TCreateAccountInputs = Partial<{
  name: string;
  email: string;
  password: string;
}>;

function UserInput() {
  const nameRef = useRef<InputBoxRef>(null);
  const emailRef = useRef<InputBoxRef>(null);
  const passwordRef = useRef<InputBoxRef>(null);

  function getValues(): TCreateAccountInputs {
    return {
      name: nameRef.current?.getValue(),
      email: emailRef.current?.getValue(),
      password: passwordRef.current?.getValue(),
    };
  }

  return (
    <View style={styles.container}>
      <InputBox ref={nameRef} placeholder="Enter Name" />
      <InputBox ref={emailRef} placeholder="Enter Email" />
      <InputBox ref={passwordRef} placeholder="Enter Password" />
      <SignupBtn getValues={getValues} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
});

export default UserInput;
