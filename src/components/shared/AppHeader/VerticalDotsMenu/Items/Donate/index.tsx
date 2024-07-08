import {Menu} from 'react-native-paper';
import {AppHeaderContext} from '../..';

type Props = {
  getContext: () => AppHeaderContext;
};

function Donate({getContext}: Props) {
  const {hideMenu, navigation} = getContext();

  function handlePress() {
    hideMenu();
    navigation.navigate('Donation');
  }

  return <Menu.Item title="Donate" onPress={handlePress} />;
}

export default Donate;
