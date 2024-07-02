import {StyleSheet, View} from 'react-native';
import {TAccountInfoObject} from '..';
import LoginLogoutBtn from './LoginLogoutBtn';
import SettingsBtn from './SettingsBtn';

type Props = {
  getObject: () => TAccountInfoObject;
};

function DialogUserActions({getObject}: Props) {
  return (
    <>
      <LoginLogoutBtn getObject={getObject} />
      <View style={styles.container}>
        <SettingsBtn getObject={getObject} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    gap: 10,
  },
});

export default DialogUserActions;
