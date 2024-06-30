import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import {TTabNavigationParamList} from '@app/types/navigation';
import MobileScreen from '@app/screens/Tab/MobileScreen';
import DesktopScreen from '@app/screens/Tab/DesktopScreen';
import {MD3Theme, withTheme} from 'react-native-paper';

type Props = {
  theme: MD3Theme;
};

const Tab = createMaterialBottomTabNavigator<TTabNavigationParamList>();

function TabNavigation({theme}: Props) {
  return (
    <Tab.Navigator theme={theme} backBehavior="none">
      <Tab.Screen
        name="Mobile"
        component={MobileScreen}
        options={{tabBarIcon: 'cellphone'}}
      />
      {/* <Tab.Screen */}
      {/*   name="Desktop" */}
      {/*   component={DesktopScreen} */}
      {/*   options={{tabBarIcon: 'monitor'}} */}
      {/* /> */}
    </Tab.Navigator>
  );
}

export default withTheme(TabNavigation);
