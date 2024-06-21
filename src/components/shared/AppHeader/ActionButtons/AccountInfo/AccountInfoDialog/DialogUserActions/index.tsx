import {StyleSheet, View} from 'react-native';
import {Button, useTheme} from 'react-native-paper';
import {TAccountInfoObject} from '..';

type Props = {
  getObject: () => TAccountInfoObject;
};

function DialogUserActions({getObject}: Props) {
  const {user, navigation, dismissDialog} = getObject();
  const {colors} = useTheme();

  function navigateToLoginScreen() {
    dismissDialog();
    navigation.navigate('Login');
  }

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: colors.surfaceVariant,
      }}>
      {user ? (
        <Button mode="contained">Log Out</Button>
      ) : (
        <Button mode="contained" onPress={navigateToLoginScreen}>
          Log In
        </Button>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    padding: 16,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderBottomEndRadius: 24,
    borderBottomStartRadius: 24,
  },
});

export default DialogUserActions;
