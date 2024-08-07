/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import ShowWallpaperActions from '@app/features/wallpaperActions/components/ShowWallpaperActions';
import {Wallpaper} from '@app/types/api/wallpaper';
import {Fragment, PropsWithChildren, useState} from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {Dialog, Portal} from 'react-native-paper';
import WallpaperInformationDialog from '../../WallpaperInformationDialog';

type Props = {
  wallpaper: Wallpaper;
} & Required<PropsWithChildren>;

function DoubleTapShowControls({wallpaper, children}: Props) {
  const [showApplyAndDownload, setShowApplyAndDownload] = useState(false);
  const [showInfoDialog, setShowInfoDialog] = useState(false);

  const longPress = Gesture.LongPress()
    .onStart(() => {
      setShowInfoDialog(true);
    })
    .runOnJS(true);

  const tap = Gesture.Tap()
    .numberOfTaps(2)
    .onEnd(() => {
      setShowApplyAndDownload(true);
    })
    .runOnJS(true);

  const composed = Gesture.Race(tap, longPress);

  return (
    <Fragment>
      <GestureDetector gesture={composed}>{children}</GestureDetector>
      <Portal>
        <Dialog
          visible={showApplyAndDownload}
          onDismiss={() => setShowApplyAndDownload(false)}>
          <Dialog.Title>Actions</Dialog.Title>
          <Dialog.Actions>
            <ShowWallpaperActions wallpaper={wallpaper} />
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <WallpaperInformationDialog
        show={showInfoDialog}
        onDismiss={() => setShowInfoDialog(false)}
        wallpaper={wallpaper}
      />
    </Fragment>
  );
}

export default DoubleTapShowControls;
