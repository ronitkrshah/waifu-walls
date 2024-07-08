import ShowDonationInfo from '@app/components/screens/Stack/DonationScreen/ShowDonationInfo';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function DonationScreen() {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <ShowDonationInfo />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});

export default DonationScreen;
