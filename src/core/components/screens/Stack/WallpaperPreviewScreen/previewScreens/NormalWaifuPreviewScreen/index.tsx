/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import NormalPreviewImage from './NormalPreviewImage';
import {WallpaperModule} from '@app/modules';
import {Flex} from '@core/components/common';
import {Appbar} from 'react-native-paper';
import {Fragment, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@app/navigation/types';
import {StyleSheet, View} from 'react-native';
import {AppSizes} from '@core/constants';
import WallpaperInformationDialog from '../../WallpaperInformationDialog';

type Props = {
  wallpaper: WallpaperModule.WallpaperList.IWallpaper;
};

function NormalWaifuPreviewScreen({wallpaper}: Props) {
  return (
    <Fragment>
      <MyAppbar wallpaper={wallpaper} />
      <Flex flex={1} center>
        {/** Double Tap Like */}
        <WallpaperModule.Like.DoubleTapLikeWrapper wallpaper={wallpaper}>
          <NormalPreviewImage uri={wallpaper.preview_url} />
        </WallpaperModule.Like.DoubleTapLikeWrapper>

        {/** Apply & Download Option */}
        <View style={styles.actionsContainer}>
          <WallpaperModule.Actions.WallpaperActions wallpaper={wallpaper} />
        </View>
      </Flex>
    </Fragment>
  );
}

/** Custom AppBar */
function MyAppbar({wallpaper}: Props) {
  const [showInfo, setShowInfo] = useState(false);
  const navigation = useNavigation<StackNavigationProp>();
  return (
    <Fragment>
      <Appbar.Header>
        <Appbar.BackAction onPress={navigation.goBack} />
        <Appbar.Content title={wallpaper.title} />
        <Appbar.Action
          icon={'information-outline'}
          onPress={() => setShowInfo(true)}
        />
      </Appbar.Header>

      {/** Wallpapaer Information Dialog */}
      <WallpaperInformationDialog
        wallpaper={wallpaper}
        onDismiss={() => setShowInfo(false)}
        show={showInfo}
      />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  actionsContainer: {
    marginTop: AppSizes.spacing,
  },
});

export default NormalWaifuPreviewScreen;
