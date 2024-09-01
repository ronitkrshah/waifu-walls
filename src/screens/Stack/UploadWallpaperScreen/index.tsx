/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import CheckRemoteConfig from '@app/modules/remoteConfig/components/CheckRemoteConfig';
import UploadWallpaperFeature from '@app/modules/uploadWallpaper/components/UploadWallpaperFeature';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {Fragment} from 'react';
import {KeyboardAvoidingView, ScrollView, StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';

function UploadWallpaperScreen() {
  return (
    <Fragment>
      <KeyboardAvoidingView style={styles.rootContainer} behavior="padding">
        <ScrollView
          nestedScrollEnabled
          style={styles.rootContainer}
          contentContainerStyle={styles.contentContainer}>
          <UploadWallpaperFeature />
        </ScrollView>
      </KeyboardAvoidingView>

      {/** Re-Check */}
      <CheckRemoteConfig />
    </Fragment>
  );
}

/** Appbar */
UploadWallpaperScreen.Appbar = function MyAppbar({
  navigation,
}: NativeStackHeaderProps) {
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={navigation.goBack} />
      <Appbar.Content title="Upload Wallpaper" />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
});

export default UploadWallpaperScreen;
