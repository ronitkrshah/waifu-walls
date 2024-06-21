import {InputBoxRef} from '@app/components/common/InputBox';
import {RefObject} from 'react';
import {Button} from 'react-native-paper';

type Props = {
  emailRef: RefObject<InputBoxRef>;
  passwordRef: RefObject<InputBoxRef>;
  tncChecked: boolean;
};

function LoginButton({emailRef, passwordRef, tncChecked}: Props) {
  function handleSubmit() {
    const email = emailRef.current?.getValue();
    const password = passwordRef.current?.getValue();

    console.log({email, password});
  }

  return (
    <Button onPress={handleSubmit} mode="contained" disabled={!tncChecked}>
      Log In
    </Button>
  );
}

export default LoginButton;
