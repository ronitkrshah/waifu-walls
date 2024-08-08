/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Wallpaper} from '@app/types/api/wallpaper';
import {Fragment} from 'react';
import {Linking, StyleSheet, View} from 'react-native';
import {Button, Dialog, Portal, Text} from 'react-native-paper';

type Props = {
  show: boolean;
  onDismiss(): void;
  wallpaper: Wallpaper;
};

function WallpaperInformationDialog({wallpaper, show, onDismiss}: Props) {
  return (
    <Fragment>
      <Portal>
        <Dialog visible={show} onDismiss={onDismiss}>
          <Dialog.Title>{wallpaper.title}</Dialog.Title>
          <Dialog.Content style={styles.contentContainer}>
            <MyInformtion title="Is NSFW" value={String(wallpaper.is_nsfw)} />
            <MyInformtion title="Uploader" value={wallpaper.uploader_name} />
            <MyInformtion title="Original Author" value={wallpaper.author} />
            <MyInformtion
              title="Original Post Link"
              linkButton={wallpaper.original_post_link}
            />
          </Dialog.Content>
        </Dialog>
      </Portal>
    </Fragment>
  );
}

type MyInformtionProps = {
  title: string;
  value?: string;
  linkButton?: string;
};

function MyInformtion({title, value, linkButton}: MyInformtionProps) {
  function openLink() {
    Linking.openURL(linkButton!);
  }

  return (
    <View style={styles.informationContainer}>
      <Text variant="labelLarge">{title}</Text>
      {linkButton ? (
        <Button onPress={openLink}>Open Link</Button>
      ) : (
        <Text>{value ?? 'Not Specified'}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    gap: 10,
  },
  informationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default WallpaperInformationDialog;
