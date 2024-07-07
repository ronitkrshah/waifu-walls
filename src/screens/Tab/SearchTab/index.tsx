import SearchBox from '@app/components/screens/Tab/SearchTab/SeachBox';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function SearchTab() {
  return (
    <SafeAreaView style={styles.container}>
      <SearchBox />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
});

export default SearchTab;