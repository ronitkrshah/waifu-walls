import UserAccount from '@app/components/screens/Tab/AccountScreen/UserAccount';
import AppHeader from '@app/components/shared/AppHeader';
import {StyleSheet, View} from 'react-native';

function AccountScreen() {
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

export default AccountScreen;
