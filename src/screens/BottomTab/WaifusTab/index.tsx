/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import AppSearchBar from '@app/components/screens/BottomTab/WaifusTab/AppSearchBar';
import WallpaperList from '@app/features/wallpaperList/components/WallpaperList';
import CheckAppUpdates from '@app/features/remoteConfig/components/CheckAppUpdates';
import useGlobalStore from '@app/store';
import {
  BottomTabNavigationRoutes,
  BottomTabNavigationScreenProps,
  StackNavigationRoutes,
} from '@app/types/navigation';
import {DefaultStyles} from '@app/utils/constants/style';
import {Fragment} from 'react';
import {StyleSheet, View} from 'react-native';
import {FAB} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

function WaifusTab({
  navigation,
}: BottomTabNavigationScreenProps<BottomTabNavigationRoutes.WAIFUS>) {
  const isAuthenticated = useGlobalStore(state => state.user.isAuthenticated);
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
      {isAuthenticated && (
        <FAB icon={'file-upload'} style={styles.fab} onPress={onFabPress} />
      )}
      <CheckAppUpdates />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: DefaultStyles.SPACING,
    paddingHorizontal: DefaultStyles.SPACING,
  },
  fab: {
    position: 'absolute',
    bottom: DefaultStyles.SPACING,
    right: DefaultStyles.SPACING,
  },
});

export default WaifusTab;
