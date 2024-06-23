import {TUseNavigation} from '@app/types/navigation';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';

function CreateAccount() {
  const navigation = useNavigation<TUseNavigation>();
  const {colors} = useTheme();

  function navigateToSignupPage() {
    navigation.navigate('Signup');
  }
  return (
    <View style={styles.container}>
      <Text>Don't have an account?</Text>
      <Text
        onPress={navigateToSignupPage}
        style={{...styles.btn, color: colors.primary}}>
        Create now
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 6,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btn: {
    textDecorationLine: 'underline',
  },
});

export default CreateAccount;
