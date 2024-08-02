/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import LogoutButton from '@app/features/auth/logout/components/LogoutButton';
import {DefaultStyles} from '@app/utils/constants/style';
import {Dimensions, StyleSheet} from 'react-native';
import {Avatar, Surface, Text, useTheme} from 'react-native-paper';

const user = {
  avatar:
    'https://i.pinimg.com/originals/28/fe/78/28fe78fa581c129728e1b494749b5597.jpg',
  fullName: 'Hyuga Hinata',
  isAdmin: true,
};

const {width: SCREEN_WIDTH} = Dimensions.get('screen');

function AccountTabUserDashboard() {
  const {colors} = useTheme();

  return (
    <Surface style={styles.surface}>
      <Avatar.Image
        style={styles.avatar}
        source={{
          uri: user.avatar,
        }}
      />
      <Text
        style={[{color: colors.primary}, styles.textCenter]}
        variant="headlineMedium">
        {user.fullName}
      </Text>
      <LogoutButton />
    </Surface>
  );
}
const styles = StyleSheet.create({
  surface: {
    width: SCREEN_WIDTH - DefaultStyles.SPACING * 2,
    borderRadius: DefaultStyles.SPACING * 2,
    margin: 'auto',
    padding: DefaultStyles.SPACING,
    paddingTop: DefaultStyles.SPACING * 3,
    gap: DefaultStyles.SPACING,
  },
  avatar: {
    position: 'absolute',
    alignSelf: 'center',
    transform: [{translateY: -30}],
    elevation: 2,
  },
  textCenter: {
    textAlign: 'center',
  },
});

export default AccountTabUserDashboard;
