import InputBox, {InputBoxRef} from '@app/components/common/InputBox';
import {useRef} from 'react';
import {StyleSheet} from 'react-native';
import SignupBtn from '../SignupButton';
import {Surface} from 'react-native-paper';

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
    <Surface style={styles.surface}>
      <InputBox ref={nameRef} placeholder="Enter Name" />
      <InputBox ref={emailRef} placeholder="Enter Email" />
      <InputBox ref={passwordRef} placeholder="Enter Password" />
      <SignupBtn getValues={getValues} />
    </Surface>
  );
}

const styles = StyleSheet.create({
  surface: {
    gap: 16,
    width: '98%',
    alignSelf: 'center',
    paddingVertical: 40,
    paddingHorizontal: 16,
    borderRadius: 24,
  },
});

export default UserInput;
