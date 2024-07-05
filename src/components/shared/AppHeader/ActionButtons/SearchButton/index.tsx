import {Appbar} from 'react-native-paper';
import {THeaderNavigationProp} from '../..';

function SearchButton({navigation}: THeaderNavigationProp) {
  function handlePress() {
    navigation.navigate('Search');
  }

  return <Appbar.Action icon={'magnify'} onPress={handlePress} />;
}

export default SearchButton;
