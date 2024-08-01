/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {StackNavigationRoutes, StackUseNavigation} from '@app/types/navigation';
import {DefaultStrings} from '@app/utils/constants/strings';
import {DefaultStyles} from '@app/utils/constants/style';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {Avatar, Button, Surface, Text} from 'react-native-paper';

function AccountTabLoginBox() {
  const navigation = useNavigation<StackUseNavigation>();

  function handleLoginPress() {
    navigation.push(StackNavigationRoutes.REGISTER_AND_LOGIN_SCREEN);
  }

  return (
    <Surface style={styles.surface}>
      <Avatar.Icon icon={'account'} />
      <Text variant="titleMedium" style={styles.helperText}>
        {DefaultStrings.LOGIN_FEATURE_HELPER_TEXT}
      </Text>
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
