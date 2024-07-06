import {FlatList} from 'react-native-gesture-handler';
import SuggestionButton from './SuggestionButton';
import {StyleSheet} from 'react-native';

const suggestionList = [
  'Shinobu',
  'Hinata',
  'Kurumi',
  'Nezuko',
  'Rem',
  'Revy',
  'Akame',
  'Fubuki',
  'Zero Two',
  'Mai',
];

function SeacrhSuggestion() {
  return (
    <FlatList
      data={suggestionList}
      horizontal
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => <SuggestionButton name={item} />}
      keyExtractor={(item) => item}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    gap: 16,
  },
});

export default SeacrhSuggestion;
