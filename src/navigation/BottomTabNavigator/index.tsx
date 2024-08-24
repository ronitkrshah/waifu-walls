/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  AccountTab,
  FavouritesTab,
  FlavoursTab,
  WaifusTab,
} from '@app/screens/BottomTab';
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
      backBehavior="none"
      theme={theme}
      sceneAnimationType="opacity"
      sceneAnimationEnabled
      labeled={false}>
      <Tab.Screen
        name={BottomTabNavigationRoutes.WAIFUS}
        component={WaifusTab}
        options={() => ({
          tabBarIcon: ({color, focused}) =>
            TabBarIcon(focused ? 'home' : 'home-outline', color),
        })}
      />
      <Tab.Screen
        name={BottomTabNavigationRoutes.FLAVOURS}
        component={FlavoursTab}
        options={() => ({
          tabBarIcon: ({color, focused}) =>
            TabBarIcon(focused ? 'shape' : 'shape-outline', color),
        })}
      />
      <Tab.Screen
        name={BottomTabNavigationRoutes.FVAOURITES}
        component={FavouritesTab}
        options={() => ({
          tabBarIcon: ({color, focused}) =>
            TabBarIcon(focused ? 'heart' : 'heart-outline', color),
        })}
      />
      <Tab.Screen
        name={BottomTabNavigationRoutes.ACCOUNT}
        component={AccountTab}
        options={() => ({
          tabBarIcon: ({color, focused}) =>
            TabBarIcon(focused ? 'account' : 'account-outline', color),
        })}
      />
    </Tab.Navigator>
  );
}

/**
 * Tab Bar Navigation Icon
 *
 * @param {string} icon - Icon to render
 * @param {string} color - Color to use
 */
function TabBarIcon(icon: string, color: string) {
  return <MaterialCommunityIcons name={icon} color={color} size={24} />;
}

export default withTheme(BottomTabNavigator);
