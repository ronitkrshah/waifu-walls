/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Flex from '@app/components/common/Flex';
import AccelerometerImagePreviewScreen from '@app/components/screens/Stack/WallpaperPreviewScreen/AccelerometerImagePreviewScreen';
import NormalImagePreviewScreen from '@app/components/screens/Stack/WallpaperPreviewScreen/NormalImagePreviewScreen';
import WallpaperInformationDialog from '@app/components/screens/Stack/WallpaperPreviewScreen/WallpaperInformationDialog';
import LikeWallpaperButton from '@app/features/likeWallpaper/components/LikeWallpaperButton';
import useGlobalStore from '@app/store';
import {Wallpaper} from '@app/types/api/wallpaper';
import {
  StackNavigationRoutes,
  StackNavigationScreenProps,
} from '@app/types/navigation';
import {Fragment, useState} from 'react';
import {Appbar} from 'react-native-paper';

function WallpaperPreviewScreen({
  navigation,
  route,
}: StackNavigationScreenProps<StackNavigationRoutes.WALLPAPER_PREVIEW_SCREEN>) {
  const showCustomizePreviewScreen = useGlobalStore(
    state => state.appSettings.useCustomizePreviewScreen,
  );
  const {wallpaper} = route.params;

  return showCustomizePreviewScreen ? (
    <Flex flex={1} center={showCustomizePreviewScreen ? true : undefined}>
      <AccelerometerImagePreviewScreen wallpaper={wallpaper} />
    </Flex>
  ) : (
    <Fragment>
      <MyAppbar wallpaper={wallpaper} backFunc={navigation.goBack} />
      <NormalImagePreviewScreen wallpaper={wallpaper} />
    </Fragment>
  );
}

/** Appbar */
type MyAppbarProps = {
  wallpaper: Wallpaper;
  backFunc(): void;
};

function MyAppbar({wallpaper, backFunc}: MyAppbarProps) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={backFunc} />
      <Appbar.Content title={wallpaper.title} />
      <Appbar.Action
        icon={'information-outline'}
        onPress={() => setShowInfo(true)}
      />
      <WallpaperInformationDialog
        wallpaper={wallpaper}
        show={showInfo}
        onDismiss={() => setShowInfo(false)}
      />
    </Appbar.Header>
  );
}
export default WallpaperPreviewScreen;
