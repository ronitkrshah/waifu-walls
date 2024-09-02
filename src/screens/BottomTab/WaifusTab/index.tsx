/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {WallpaperModule} from '@app/modules';
import {RemoteConfigModule} from '@app/modules';
import {
  BottomTabNavigationRoutes,
  BottomTabNavigationScreenProps,
  StackNavigationRoutes,
} from '@app/types/navigation';
import {Fragment} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import WallpaperUploadFAB from '@app/components/screens/BottomTab/WaifusTab/WallpaperUploadFAB';

const {LatestWallpapersScreen} = WallpaperModule.WallpaperList;

function WaifusTab({
  navigation,
}: BottomTabNavigationScreenProps<BottomTabNavigationRoutes.WAIFUS>) {
  function onFabPress() {
    navigation.push(StackNavigationRoutes.UPLOAD_WALLPAPER_SCREEN);
  }

  return (
    <Fragment>
      {/** The List of latest wallpapers */}
      <SafeAreaView>
        <LatestWallpapersScreen showHeaderSuggestions />
      </SafeAreaView>

      {/** Upload Button */}
      <WallpaperUploadFAB onPress={onFabPress} />

      {/** Remote Config */}
      <RemoteConfigModule.CheckAppUpdates />
    </Fragment>
  );
}

export default WaifusTab;
