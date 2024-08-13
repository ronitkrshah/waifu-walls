/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Wallpaper} from '@app/types/api/wallpaper';
import {DefaultStyles} from '@app/utils/constants/style';
import {Fragment, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ActivityIndicator, Button, Dialog, Portal} from 'react-native-paper';
import useWallpaperActionsController from '../controllers/useWallpaperActionsController';
import {SetWallpaperDestination} from '../utils/setWallpaper';

type Props = {
  wallpaper: Wallpaper;
};

function ShowWallpaperActions({wallpaper}: Props) {
  const [showDestinationOptions, setShowDestinationOptions] = useState(false);
  const {applyWallpaper, isApplyingWallaper, isDownloading, downloadWallpaper} =
    useWallpaperActionsController({
      wallpaper,
    });
  function onApply() {
    setShowDestinationOptions(true);
  }

  function dismissDestinationDialog() {
    setShowDestinationOptions(false);
  }

  return (
    <Fragment>
      <View style={styles.container}>
        <Button mode="contained" onPress={onApply}>
          Apply
        </Button>
        <Button
          disabled={isDownloading}
          loading={isDownloading}
          onPress={downloadWallpaper}
          mode="contained">
          Download
        </Button>
      </View>

      {/** Portal For Choosing Destinaion */}
      <Portal>
        <Dialog
          visible={showDestinationOptions}
          onDismiss={dismissDestinationDialog}>
          <Dialog.Title>Choose Destination</Dialog.Title>
          <Dialog.Content style={styles.content}>
            {isApplyingWallaper ? (
              <ActivityIndicator animating />
            ) : (
              <Fragment>
                <Button
                  mode="contained"
                  onPress={() =>
                    applyWallpaper(SetWallpaperDestination.SYSTEM)
                  }>
                  Home
                </Button>
                <Button
                  mode="contained"
                  onPress={() => applyWallpaper(SetWallpaperDestination.LOCK)}>
                  Lock
                </Button>
                <Button
                  mode="contained"
                  onPress={() => applyWallpaper(SetWallpaperDestination.BOTH)}>
                  Both
                </Button>
              </Fragment>
            )}
          </Dialog.Content>
        </Dialog>
      </Portal>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: DefaultStyles.SPACING,
  },
  content: {
    gap: DefaultStyles.SPACING,
  },
});

export default ShowWallpaperActions;
