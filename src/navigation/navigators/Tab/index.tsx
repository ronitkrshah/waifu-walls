import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import {TTabNavigationParamList} from '@app/types/navigation';
import {MD3Theme, withTheme} from 'react-native-paper';
import HomeScreen from '@app/screens/Tab/HomeScreen';
import SearchScreen from '@app/screens/Tab/SearchScreen';

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
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: 'home',
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarIcon: 'magnify',
          tabBarLabel: 'Search',
        }}
      />
      {/* <Tab.Screen */}
      {/*   name="AccountScreen" */}
      {/*   component={HomeScreen} */}
      {/*   options={{ */}
      {/*     tabBarIcon: 'account', */}
      {/*   }} */}
      {/* /> */}
    </Tab.Navigator>
  );
}

export default withTheme(TabNavigation);
