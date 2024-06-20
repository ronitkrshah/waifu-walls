import {Appbar} from 'react-native-paper';
import SearchButton from './ActionButtons/SearchButton';

type Props = {
  title: string;
};

function AppHeader({title}: Props) {
  return (
    <Appbar.Header>
      <Appbar.Content title={title} />

      {/* Action Buttons */}
      <SearchButton />
    </Appbar.Header>
  );
}

export default AppHeader;
