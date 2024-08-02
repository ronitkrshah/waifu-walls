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
} from '@app/types/navigation';
import {DefaultStyles} from '@app/utils/constants/style';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {Avatar, Button, Surface} from 'react-native-paper';

function AccountTabLoginBox() {
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
    padding: DefaultStyles.SPACING,
    marginHorizontal: DefaultStyles.SPACING * 2,
    marginVertical: 'auto',
    borderRadius: DefaultStyles.SPACING * 2,
    gap: DefaultStyles.SPACING,
    alignItems: 'center',
  },
  helperText: {
    textAlign: 'center',
  },
});

export default AccountTabLoginBox;
