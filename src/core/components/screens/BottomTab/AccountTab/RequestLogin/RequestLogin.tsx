/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  BottomTabNavigationProp,
  BottomTabNavigationRoutes,
  StackNavigationRoutes,
} from '@app/navigation/types';
import {AppSizes} from "@core/constants"
import {useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {Avatar, Button, Surface} from 'react-native-paper';

function RequestLogin() {
  const navigation =
    useNavigation<BottomTabNavigationProp<BottomTabNavigationRoutes.ACCOUNT>>();

  function handleLoginPress() {
    navigation.push(StackNavigationRoutes.REGISTER_AND_LOGIN_SCREEN);
  }

  return (
    <Surface style={styles.surface}>
      <Avatar.Icon icon={'account'} />
      <Button mode="contained" onPress={handleLoginPress}>
        Log In Now
      </Button>
    </Surface>
  );
}

const styles = StyleSheet.create({
  surface: {
    padding: AppSizes.spacing,
    marginHorizontal: AppSizes.spacing * 2,
    marginVertical: 'auto',
    borderRadius: AppSizes.spacing * 2,
    gap: AppSizes.spacing,
    alignItems: 'center',
  },
  helperText: {
    textAlign: 'center',
  },
});

export default RequestLogin;
