import SearchBox from '@app/components/screens/Stack/SearchScreen/SeachBox';
import SeacrhSuggestion from '@app/components/screens/Stack/SearchScreen/SearchSuggestions';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function SearchScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{...styles.container, paddingTop: insets.top + 10}}>
      <SearchBox />
      <SeacrhSuggestion />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});

export default SearchScreen;
