/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {WallpaperResponseData} from '@app/types/api/wallpaper';
import {Fragment, useState} from 'react';
import {Appbar, Dialog, Portal, Text} from 'react-native-paper';

type Props = {
  show: boolean;
  onDismiss(): void;
  wallpaper: WallpaperResponseData;
};

function WallpaperInformationDialog({wallpaper, show, onDismiss}: Props) {
  return (
    <Fragment>
      <Portal>
        <Dialog visible={show} onDismiss={onDismiss}>
          <Dialog.Title>{wallpaper.title}</Dialog.Title>
          <Dialog.Content>
            <Text>Mature Content: {String(wallpaper.is_nsfw)}</Text>
            <Text>Uploaded By: {wallpaper.uploader_name}</Text>
            <Text>Tags: [{String(wallpaper.tags)}]</Text>
          </Dialog.Content>
        </Dialog>
      </Portal>
    </Fragment>
  );
}

export default WallpaperInformationDialog;
