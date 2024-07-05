import UserAccount from '@app/components/screens/Stack/SettingsScreen/UserAccount';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function SettingsScreen() {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <UserAccount />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default SettingsScreen;
