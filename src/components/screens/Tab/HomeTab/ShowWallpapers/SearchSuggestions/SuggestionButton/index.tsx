import {TUseNavigation} from '@app/types/navigation';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-paper';

type Props = {
  name: string;
};

function SuggestionButton({name}: Props) {
  const navigation = useNavigation<TUseNavigation>();

  function handlePress() {
    navigation.navigate('SearchResluts', {query: name});
  }

  return (
    <Button mode="contained-tonal" onPress={handlePress}>
      {name}
    </Button>
  );
}

export default SuggestionButton;
