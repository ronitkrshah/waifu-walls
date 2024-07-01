import {StyleSheet, ToastAndroid, View} from 'react-native';
import {TCreateAccountInputs} from '../UserInput';
import {Button, Checkbox} from 'react-native-paper';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {TUseNavigation} from '@app/types/navigation';
import {authService} from '@app/appwrite/AuthService';
import {databaseService} from '@app/appwrite/DatabaseService';
import {useDispatch} from 'react-redux';
import {setUserGlobalStore} from '@app/store/reducers/userReducer';

type Props = {
  getValues: () => TCreateAccountInputs;
};

function SignupBtn({getValues}: Props) {
  const [loading, setLoading] = useState(false);
  const [tnc, setTnc] = useState(false);
  const navigation = useNavigation<TUseNavigation>();
  const dispatch = useDispatch();

  async function handleSubmit() {
    const {name, email, password} = getValues();

    if (!name || !email || !password) {
      ToastAndroid.show('Missing Fields!', ToastAndroid.SHORT);
      return;
    }

    setLoading(true);
    try {
      const user = await authService.createAccount({email, password, name});
      dispatch(
        setUserGlobalStore({
          userId: user.$id,
          email,
          name,
        }),
      );
      navigation.popToTop();
    } catch (e) {
      if (e instanceof Error) {
        ToastAndroid.show(e.message, ToastAndroid.SHORT);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Checkbox.Item
        label="Accept Terms and Conditions"
        status={tnc ? 'checked' : 'unchecked'}
        onPress={() => setTnc((p) => !p)}
      />

      <Button
        loading={loading}
        onPress={handleSubmit}
        disabled={!tnc || loading}
        mode="contained">
        Sign Up
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
});

export default SignupBtn;
