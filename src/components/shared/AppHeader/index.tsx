import {TUseNavigation} from '@app/types/navigation';
import {useNavigation} from '@react-navigation/native';
import {Appbar} from 'react-native-paper';

type Props = {
  title: string;
  mode?: 'small' | 'medium' | 'large' | 'center-aligned';
  showBackButton?: boolean;
};

function AppHeader({title, mode, showBackButton}: Props) {
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
    </Appbar.Header>
  );
}

export default AppHeader;
