/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {useAppTheme} from '@app/core/theme/MaterialYouTheme';
import {AppSizes} from '@core/constants';
import {Fragment} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {Avatar, Surface, Text} from 'react-native-paper';
import {AdminsOnly} from './AdminsOnly';
import {AdminsOnlyModule, AuthenticationModule} from '@app/modules';
import {useCurrentUser} from '@core/hooks';

const {width: SCREEN_WIDTH} = Dimensions.get('screen');

function UserDashboard() {
  const {currentUser} = useCurrentUser();
  const {colors} = useAppTheme();

  return (
    <Fragment>
      <Surface style={styles.surface}>
        <Avatar.Text label={currentUser.name.charAt(0)} style={styles.avatar} />
        <Text
          style={[{color: colors.primary}, styles.textCenter]}
          variant="headlineMedium">
          {currentUser.name}
        </Text>

        <AdminsOnlyModule.AdminProtected>
          <AdminsOnly />
        </AdminsOnlyModule.AdminProtected>

        {/** Log Out */}
        <AuthenticationModule.LogoutButton />
      </Surface>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  surface: {
    width: SCREEN_WIDTH - AppSizes.spacing * 2,
    borderRadius: AppSizes.spacing * 2,
    margin: 'auto',
    padding: AppSizes.spacing,
    paddingTop: AppSizes.spacing * 3,
    gap: AppSizes.spacing,
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

export default UserDashboard;
