import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './navigators/Stack';

function RootNavigation() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

export default RootNavigation;
