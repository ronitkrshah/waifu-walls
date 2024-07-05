import UserAccount from '@app/components/screens/Stack/SettingsScreen/UserAccount';
import {StyleSheet, View} from 'react-native';

function SettingsScreen() {
  return (
    <View style={styles.rootContainer}>
      <UserAccount />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default SettingsScreen;
