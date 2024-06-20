import {Appbar} from 'react-native-paper';

function SearchButton() {
  function handlePress() {
    console.log('Search Button Pressed!');
  }

  return <Appbar.Action icon={'magnify'} onPress={handlePress} />;
}

export default SearchButton;
