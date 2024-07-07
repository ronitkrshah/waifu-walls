import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import {TTabNavigationParamList} from '@app/types/navigation';
import {MD3Theme, withTheme} from 'react-native-paper';
import HomeTab from '@app/screens/Tab/HomeTab';
import SearchTab from '@app/screens/Tab/SearchTab';
import AccountTab from '@app/screens/Tab/AccountTab';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
      sceneAnimationType="shifting"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let currentRoute = route.name;
          let iconName = '';

          switch (currentRoute) {
            case 'HomeTab':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'SearchTab':
              iconName = 'magnify';
              break;
            case 'AccountTab':
              iconName = focused ? 'account' : 'account-outline';
              break;
          }

          return (
            <MaterialCommunityIcons name={iconName} color={color} size={24} />
          );
        },
      })}>
      <Tab.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="SearchTab"
        component={SearchTab}
        options={{
          tabBarLabel: 'Search',
        }}
      />
      <Tab.Screen
        name="AccountTab"
        component={AccountTab}
        options={{
          tabBarLabel: 'Account',
        }}
      />
    </Tab.Navigator>
  );
}

export default withTheme(TabNavigation);
