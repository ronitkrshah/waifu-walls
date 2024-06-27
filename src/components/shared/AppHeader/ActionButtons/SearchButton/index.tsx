import {TUseNavigation} from '@app/types/navigation';
import {useNavigation} from '@react-navigation/native';
import {Appbar} from 'react-native-paper';

function SearchButton() {
  const navigation = useNavigation<TUseNavigation>();

  function handlePress() {
    navigation.navigate('Search');
  }

  return <Appbar.Action icon={'magnify'} onPress={handlePress} />;
}

export default SearchButton;
