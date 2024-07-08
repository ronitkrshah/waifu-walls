import {TUseNavigation} from '@app/types/navigation';
import {useNavigation} from '@react-navigation/native';
import {Appbar} from 'react-native-paper';
import VerticalDotsMenu from './VerticalDotsMenu';

type Props = {
  title: string;
  mode?: 'small' | 'medium' | 'large' | 'center-aligned';
  showBackButton?: boolean;
  showVerticalDotsMenu?: boolean;
};

function AppHeader({title, mode, showBackButton, showVerticalDotsMenu}: Props) {
  const navigation = useNavigation<TUseNavigation>();

  function goBack() {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }

  return (
    <Appbar.Header mode={mode}>
      {showBackButton && <Appbar.BackAction onPress={goBack} />}
      <Appbar.Content title={title} />
      {showVerticalDotsMenu && <VerticalDotsMenu />}
    </Appbar.Header>
  );
}

export default AppHeader;
