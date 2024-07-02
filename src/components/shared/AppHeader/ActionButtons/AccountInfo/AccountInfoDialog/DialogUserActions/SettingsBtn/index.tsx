import {Button} from 'react-native-paper';
import {TAccountInfoObject} from '../..';

type Props = {
  getObject: () => TAccountInfoObject;
};

function SettingsBtn({getObject}: Props) {
  const {navigation, dismissDialog} = getObject();

  function handlePress() {
    dismissDialog();
    navigation.navigate('Settings');
  }

  return (
    <Button mode="contained-tonal" onPress={handlePress}>
      Settings
    </Button>
  );
}

export default SettingsBtn;
