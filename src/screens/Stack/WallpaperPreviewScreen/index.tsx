/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Flex from '@app/components/common/Flex';
import AccelerometerImagePreviewScreen from '@app/components/screens/Stack/WallpaperPreviewScreen/AccelerometerImagePreviewScreen';
import NormalImagePreviewScreen from '@app/components/screens/Stack/WallpaperPreviewScreen/NormalImagePreviewScreen';
import useGlobalStore from '@app/store';
import {
  StackNavigationRoutes,
  StackNavigationScreenProps,
} from '@app/types/navigation';
import {Fragment} from 'react';
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
      <MyAppbar title={wallpaper.title} backFunc={navigation.goBack} />
      <NormalImagePreviewScreen wallpaper={wallpaper} />
    </Fragment>
  );
}

/** Appbar */
type MyAppbarProps = {
  title: string;
  backFunc(): void;
};

function MyAppbar({title, backFunc}: MyAppbarProps) {
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={backFunc} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
}
export default WallpaperPreviewScreen;
