import {useState} from 'react';
import {Appbar, Menu} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SourceCode from './Items/SourceCode';
import Donate from './Items/Donate';

export type TItemProps = {
  hideMenu: () => void;
};

function VerticalDotsMenu() {
  const [visible, setVisible] = useState(false);
  const {top} = useSafeAreaInsets();

  function showMenu() {
    setVisible(true);
  }

  function hideMenu() {
    setVisible(false);
  }

  return (
    <Menu
      visible={visible}
      contentStyle={styles.menu}
      onDismiss={hideMenu}
      statusBarHeight={top}
      anchor={<Appbar.Action icon={'dots-vertical'} onPress={showMenu} />}>
      <SourceCode hideMenu={hideMenu} />
      {/* <Donate hideMenu={hideMenu} /> */}
    </Menu>
  );
}

const styles = StyleSheet.create({
  menu: {
    borderRadius: 20,
  },
});

export default VerticalDotsMenu;
