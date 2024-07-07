import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import {TTabNavigationParamList} from '@app/types/navigation';
import {MD3Theme, withTheme} from 'react-native-paper';
import HomeTab from '@app/screens/Tab/HomeTab';
import SearchTab from '@app/screens/Tab/SearchTab';
import AccountTab from '@app/screens/Tab/AccountTab';

type Props = {
  theme: MD3Theme;
};

const Tab = createMaterialBottomTabNavigator<TTabNavigationParamList>();

function TabNavigation({theme}: Props) {
  return (
    <Tab.Navigator
      theme={theme}
      backBehavior="none"
      shifting
      sceneAnimationType="shifting">
      <Tab.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          tabBarIcon: 'home',
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="SearchTab"
        component={SearchTab}
        options={{
          tabBarIcon: 'magnify',
          tabBarLabel: 'Search',
        }}
      />
      <Tab.Screen
        name="AccountTab"
        component={AccountTab}
        options={{
          tabBarIcon: 'account',
          tabBarLabel: 'Account',
        }}
      />
    </Tab.Navigator>
  );
}

export default withTheme(TabNavigation);
