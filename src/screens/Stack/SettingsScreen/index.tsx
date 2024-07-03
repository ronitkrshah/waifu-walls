import UnstableSettings from '@app/components/screens/Stack/SettingsScreen/AppSettings/UnstableSettings';
import {ScrollView, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function SettingsScreen() {
  const {top} = useSafeAreaInsets();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{paddingTop: top, ...styles.scrollView}}>
      <UnstableSettings />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 16,
  },
});

export default SettingsScreen;
