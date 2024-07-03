import {TUseNavigation} from '@app/types/navigation';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {ToastAndroid} from 'react-native';
import {Searchbar} from 'react-native-paper';

function SearchBox() {
  const [query, setQuery] = useState('');
  const navigation = useNavigation<TUseNavigation>();

  function handleSubmit() {
    if (query.length < 3) {
      ToastAndroid.show('Query must be 3 characters long', ToastAndroid.SHORT);
    } else {
      navigation.navigate('SearchResluts', {query});
    }
  }

  return (
    <Searchbar
      value={query}
      onChangeText={setQuery}
      placeholder="Search Waifus"
      onSubmitEditing={handleSubmit}
    />
  );
}

export default SearchBox;
