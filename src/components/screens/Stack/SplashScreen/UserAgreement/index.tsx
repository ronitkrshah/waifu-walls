import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import AgreementLinks from './AgreementLinks';
import {useNavigation} from '@react-navigation/native';
import {TUseNavigation} from '@app/types/navigation';
import {useDispatch} from 'react-redux';
import {setSetupCompleted} from '@app/store/reducers/settingsReducer';

function UserAgreement() {
  const navigation = useNavigation<TUseNavigation>();
  const dispatch = useDispatch();

  function handlePress() {
    dispatch(setSetupCompleted(true));
    navigation.replace('Home', {screen: 'HomeTab'});
  }

  return (
    <View style={styles.container}>
      <AgreementLinks />
      <Button mode="contained" onPress={handlePress}>
        Accept and Use
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 'auto',
  },
});

export default UserAgreement;
