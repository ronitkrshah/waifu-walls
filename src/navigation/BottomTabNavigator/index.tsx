/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {AccountTab, WaifusTab} from '@app/screens/BottomTab';
import {
  BottomTabNavigationParamList,
  BottomTabNavigationRoutes,
} from '@app/types/navigation';
import {MD3Theme, withTheme} from 'react-native-paper';
import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  theme: MD3Theme;
};

const Tab = createMaterialBottomTabNavigator<BottomTabNavigationParamList>();

function BottomTabNavigator({theme}: Props) {
  return (
    <Tab.Navigator
      theme={theme}
      sceneAnimationType="shifting"
      shifting
      sceneAnimationEnabled>
      <Tab.Screen
        name={BottomTabNavigationRoutes.WAIFUS}
        component={WaifusTab}
        options={() => ({
          tabBarLabel: 'Waifus',
          tabBarIcon: ({color, focused}) =>
            TabBarIcon('home', 'home-outline', focused, color),
        })}
      />
      <Tab.Screen
        name={BottomTabNavigationRoutes.FLAVOURS}
        component={WaifusTab}
        options={() => ({
          tabBarLabel: 'Flavours',
          tabBarIcon: ({color, focused}) =>
            TabBarIcon('shape', 'shape-outline', focused, color),
        })}
      />
      <Tab.Screen
        name={BottomTabNavigationRoutes.ACCOUNT}
        component={AccountTab}
        options={() => ({
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, focused}) =>
            TabBarIcon('account', 'account-outline', focused, color),
        })}
      />
    </Tab.Navigator>
  );
}

/** Icon for Tab Bar */
function TabBarIcon(
  filled: string,
  outline: string,
  focused: boolean,
  color: string,
) {
  return (
    <MaterialCommunityIcons
      name={focused ? filled : outline}
      color={color}
      size={24}
    />
  );
}

export default withTheme(BottomTabNavigator);
