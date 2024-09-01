/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import NormalPreviewImage from './NormalPreviewImage';
import {WallpaperFeature} from '@app/modules';
import Flex from '@app/components/common/Flex';
import {Appbar} from 'react-native-paper';
import {Fragment, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@app/types/navigation';
import {StyleSheet, View} from 'react-native';
import {DefaultStyles} from '@app/utils/constants/style';
import WallpaperInformationDialog from '../../WallpaperInformationDialog';

type Props = {
  wallpaper: WallpaperFeature.WallpaperList.IWallpaper;
};

function NormalWaifuPreviewScreen({wallpaper}: Props) {
  return (
    <Fragment>
      <MyAppbar wallpaper={wallpaper} />
      <Flex flex={1} center>
        {/** Double Tap Like */}
        <WallpaperFeature.Like.DoubleTapLikeWrapper wallpaper={wallpaper}>
          <NormalPreviewImage uri={wallpaper.preview_url} />
        </WallpaperFeature.Like.DoubleTapLikeWrapper>

        {/** Apply & Download Option */}
        <View style={styles.actionsContainer}>
          <WallpaperFeature.Actions.WallpaperActions wallpaper={wallpaper} />
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
    marginTop: DefaultStyles.SPACING,
  },
});

export default NormalWaifuPreviewScreen;
