import {Menu} from 'react-native-paper';
import {Linking} from 'react-native';
import {AppHeaderContext} from '../..';

type Props = {
  getContext: () => AppHeaderContext;
};

function SourceCode({getContext}: Props) {
  const {hideMenu} = getContext();
  function openSourceCodeOnBrowser() {
    const repoLink = 'https://github.com/ronitkrshah/waifu-walls.git';
    Linking.openURL(repoLink);
    hideMenu();
  }

  return <Menu.Item title="Source Code" onPress={openSourceCodeOnBrowser} />;
}

export default SourceCode;
