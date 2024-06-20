import {Appbar} from 'react-native-paper';
import SearchButton from './ActionButtons/SearchButton';
import AccountInfo from './ActionButtons/AccountInfo';

type Props = {
  title: string;
};

function AppHeader({title}: Props) {
  return (
    <Appbar.Header>
      <Appbar.Content title={title} />

      {/* Action Buttons */}
      <SearchButton />
      <AccountInfo />
    </Appbar.Header>
  );
}

export default AppHeader;
