/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import useGlobalStore from '@app/store';
import {DefaultStyles} from '@app/utils/constants/style';
import {StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';
import {useShallow} from 'zustand/react/shallow';

type Props = {
  onPress(): void;
};

function WallpaperUploadFAB({onPress}: Props) {
  const {isAuthenticated, shouldUploadImages} = useGlobalStore(
    useShallow(state => ({
      isAuthenticated: state.user.isAuthenticated,
      shouldUploadImages: state.remoteConfig.shouldUploadImages,
    })),
  );

  return isAuthenticated && shouldUploadImages ? (
    <FAB icon={'file-upload'} style={styles.fab} onPress={onPress} />
  ) : null;
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: DefaultStyles.SPACING,
    right: DefaultStyles.SPACING,
  },
});

export default WallpaperUploadFAB;
