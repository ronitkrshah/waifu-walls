import UserAccount from '@app/components/screens/Tab/AccountTab/UserAccount';
import AppHeader from '@app/components/shared/AppHeader';
import {StyleSheet, View} from 'react-native';

function AccountTab() {
  return (
    <>
      <AppHeader title="Account" mode="medium" />
      <View style={styles.rootContainer}>
        <UserAccount />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default AccountTab;
