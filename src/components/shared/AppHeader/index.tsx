import {Appbar} from 'react-native-paper';
import SearchButton from './ActionButtons/SearchButton';
import AccountInfo from './ActionButtons/AccountInfo';
import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type THeaderNavigationProp = {
  navigation: NativeStackNavigationProp<ParamListBase, string, undefined>;
};

type Props = {
  title: string;
  showBackButton?: boolean;
  showActions?: boolean;
} & THeaderNavigationProp;

function AppHeader({title, showBackButton, showActions, navigation}: Props) {
  function goBack() {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }
  return (
    <Appbar.Header>
      {showBackButton && <Appbar.BackAction onPress={goBack} />}
      <Appbar.Content title={title} />
      {showActions && (
        <>
          <SearchButton navigation={navigation} />
          <AccountInfo navigation={navigation} />
        </>
      )}
    </Appbar.Header>
  );
}

export default AppHeader;
