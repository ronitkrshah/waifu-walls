import ShowResults from '@app/components/screens/Stack/SearchResultsScreen/ShowResults';
import {TStackNavigationScreenProps} from '@app/types/navigation';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function SearchReslutsScreen({
  route,
}: TStackNavigationScreenProps<'SearchResluts'>) {
  const insets = useSafeAreaInsets();

  return (
    <>
      <View style={{paddingTop: insets.top}} />
      <ShowResults query={route.params.query} />
    </>
  );
}

export default SearchReslutsScreen;
