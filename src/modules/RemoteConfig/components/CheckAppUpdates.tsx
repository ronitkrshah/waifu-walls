/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {useAppTheme} from '@app/theme/MaterialYouTheme';
import {DefaultStrings} from '@app/utils/constants/strings';
import {DefaultStyles} from '@app/utils/constants/style';
import {StyleSheet} from 'react-native';
import {Button, Dialog, Portal, Text} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import useRemoteConfig from '../hooks/useRemoteConfig';

/**
 * CheckRemoteConfig Component fetches remote config from the api service
 *
 * Renders `App Update Dialog` if any update available
 */
function CheckAppUpdates() {
  const {colors} = useAppTheme();
  const {onUpdatePress, showUpdateDialog, hideUpdateDialog} =
    useRemoteConfig();

  /** Show App Update Dialog If App Update Available */
  return (
    <Portal>
      <Dialog visible={showUpdateDialog} dismissable={false}>
        <Dialog.Content style={styles.contentContainer}>
          <MaterialCommunityIcons
            name="rocket-launch-outline"
            size={40}
            color={colors.onSurface}
          />
          <Text variant="bodyLarge" style={styles.updateText}>
            {DefaultStrings.APP_UPDATE_TEXT}
          </Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideUpdateDialog}>Later</Button>
          <Button onPress={onUpdatePress}>Update Now</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    gap: DefaultStyles.SPACING,
  },
  updateText: {
    textAlign: 'center',
  },
});

export default CheckAppUpdates;
