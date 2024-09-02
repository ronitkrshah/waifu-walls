/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {ActivityIndicator} from 'react-native-paper';
import useWallpaperList from '../hooks/useWallpaperList';
import {FlatList, StyleSheet} from 'react-native';
import {DefaultStyles} from '@app/utils/constants/style';
import {Fragment} from 'react';
import SizedBox from '@app/components/common/SizedBox';
import {RefreshControl} from 'react-native-gesture-handler';
import {useAppTheme} from '@app/theme/MaterialYouTheme';
import {WallpaperListItem} from '@app/modules/Wallpaper/shared/components'

type Props = {
  query?: string | string[];
};

function LatestWallpapers({query}: Props) {
  const {colors} = useAppTheme();
  const {
    isLoading,
    wallpaperList,
    isFetchingMore,
    fetchMore,
    handleWallpaperPress,
    refreshData,
  } = useWallpaperList(query);

  return (
    <Fragment>
      <SizedBox vertical={DefaultStyles.SPACING} />
      <FlatList
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        onEndReachedThreshold={0.5}
        onEndReached={() => fetchMore()}
        ListFooterComponentStyle={styles.footer}
        ListFooterComponent={<ActivityIndicator animating={isFetchingMore} />}
        data={wallpaperList}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={refreshData}
            colors={[colors.onSecondaryContainer]}
            progressBackgroundColor={colors.secondaryContainer}
          />
        }
        renderItem={({item}) => (
          <WallpaperListItem wallpaper={item} onPress={handleWallpaperPress} />
        )}
      />
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

export default LatestWallpapers;
