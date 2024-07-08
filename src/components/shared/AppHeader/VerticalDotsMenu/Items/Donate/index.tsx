import {Menu} from 'react-native-paper';
import {TItemProps} from '../..';

function Donate({hideMenu}: TItemProps) {
  function handlePress() {
    // ... later
  }

  return <Menu.Item title="Donate" onPress={handlePress} />;
}

export default Donate;
