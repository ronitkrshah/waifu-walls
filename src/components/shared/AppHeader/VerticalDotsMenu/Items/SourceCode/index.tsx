import {Menu} from 'react-native-paper';
import {Linking} from 'react-native';
import {TItemProps} from '../..';

function SourceCode({hideMenu}: TItemProps) {
  function openSourceCodeOnBrowser() {
    const repoLink = 'https://github.com/ronitkrshah/waifu-walls.git';
    Linking.openURL(repoLink);
    hideMenu();
  }

  return <Menu.Item title="Source Code" onPress={openSourceCodeOnBrowser} />;
}

export default SourceCode;
