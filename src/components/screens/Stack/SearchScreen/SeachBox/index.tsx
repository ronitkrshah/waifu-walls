import {useState} from 'react';
import {Searchbar} from 'react-native-paper';

function SearchBox() {
  const [query, setQuery] = useState('');

  function handleSubmit() {
    console.log('Query:', query);
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
