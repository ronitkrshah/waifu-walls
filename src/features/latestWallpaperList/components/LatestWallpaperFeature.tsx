/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {ActivityIndicator, Text} from 'react-native-paper';
import useLatestWallpaperFeatureController from '../controllers/useLatestWallpaperFeatureController';
import {FlatList, StyleSheet} from 'react-native';
import {DefaultStyles} from '@app/utils/constants/style';
import {Fragment} from 'react';
import SizedBox from '@app/components/common/SizedBox';
import WallpaperListItem from '@app/features/shared/components/WallpaperListItem';

function LatestWallpaperFeature() {
  const {
    isLoading,
    wallpaperList,
    isFetchingMore,
    fetchMore,
    handleWallpaperPress,
    refreshData,
    isRefreshing,
  } = useLatestWallpaperFeatureController();

  return (
    <Fragment>
      <SizedBox vertical={DefaultStyles.SPACING} />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          onEndReachedThreshold={0.5}
          onEndReached={() => fetchMore()}
          ListFooterComponentStyle={styles.footer}
          ListFooterComponent={<ActivityIndicator animating={isFetchingMore} />}
          data={wallpaperList}
          refreshing={isRefreshing}
          onRefresh={refreshData}
          renderItem={({item}) => (
            <WallpaperListItem
              wallpaper={item}
              onPress={handleWallpaperPress}
            />
          )}
        />
      )}
    </Fragment>
  );
}

const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: 'center',
    gap: 10,
    marginBottom: DefaultStyles.SPACING - 4,
  },
  footer: {
    paddingBottom: 24,
  },
});

export default LatestWallpaperFeature;
