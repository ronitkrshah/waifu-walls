/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import AppSearchBar from '@app/components/screens/BottomTab/WaifusTab/AppSearchBar';
import WallpaperList from '@app/features/wallpaperList/components/WallpaperList';
import CheckRemoteConfig from '@app/features/remoteConfig/components/CheckRemoteConfig';
import {
  BottomTabNavigationRoutes,
  BottomTabNavigationScreenProps,
  StackNavigationRoutes,
} from '@app/types/navigation';
import {DefaultStyles} from '@app/utils/constants/style';
import {Fragment} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import WallpaperUploadFAB from '@app/components/screens/BottomTab/WaifusTab/WallpaperUploadFAB';

function WaifusTab({
  navigation,
}: BottomTabNavigationScreenProps<BottomTabNavigationRoutes.WAIFUS>) {
  function onFabPress() {
    navigation.push(StackNavigationRoutes.UPLOAD_WALLPAPER_SCREEN);
  }

  return (
    <Fragment>
      <SafeAreaView>
        <View style={styles.container}>
          <AppSearchBar />
        </View>
      </SafeAreaView>
      <WallpaperList />
      <WallpaperUploadFAB onPress={onFabPress} />

      <CheckRemoteConfig />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: DefaultStyles.SPACING,
    paddingHorizontal: DefaultStyles.SPACING,
  },
});

export default WaifusTab;
