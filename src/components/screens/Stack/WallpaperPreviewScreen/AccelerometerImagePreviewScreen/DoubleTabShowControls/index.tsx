/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import ShowWallpaperActions from '@app/features/wallpaperActions/components/ShowWallpaperActions';
import {WallpaperResponseData} from '@app/types/api/wallpaper';
import {Fragment, PropsWithChildren, useState} from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {Dialog, Portal} from 'react-native-paper';

type Props = {
  wallpaper: WallpaperResponseData;
} & Required<PropsWithChildren>;

function DoubleTapShowControls({wallpaper, children}: Props) {
  const [showDialog, setShowDialog] = useState(false);
  const tap = Gesture.Tap()
    .numberOfTaps(2)
    .onEnd(() => {
      setShowDialog(true);
    })
    .runOnJS(true);

  function dismissDialog() {
    setShowDialog(false);
  }

  return (
    <Fragment>
      <GestureDetector gesture={tap}>{children}</GestureDetector>
      <Portal>
        <Dialog visible={showDialog} onDismiss={dismissDialog}>
          <Dialog.Title>Actions</Dialog.Title>
          <Dialog.Actions>
            <ShowWallpaperActions wallpaper={wallpaper} />
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Fragment>
  );
}

export default DoubleTapShowControls;
