/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {ActivityIndicator, Text} from 'react-native-paper';
import {useWallpaperList} from '../hooks';
import {FlatList, StyleSheet, View} from 'react-native';
import {DefaultStyles} from '@app/utils/constants/style';
import {Fragment} from 'react';
import SizedBox from '@app/components/common/SizedBox';
import {RefreshControl} from 'react-native-gesture-handler';
import {useAppTheme} from '@app/theme/MaterialYouTheme';
import {WallpaperListItem} from '@app/modules/Wallpaper/shared/components';
import {SuggestionsList} from '..';

type Props = {
  query?: string | string[];
  showHeaderSuggestions?: boolean;
};

function LatestWallpapers({query, showHeaderSuggestions = false}: Props) {
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
        ListHeaderComponent={
          showHeaderSuggestions ? (
            <>
              <View style={styles.appbarMimic}>
                <Text variant="headlineMedium">Waifus</Text>
              </View>
              <SuggestionsList />
            </>
          ) : undefined
        }
        ListHeaderComponentStyle={styles.header}
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
    paddingVertical: 10,
  },
  header: {
    paddingHorizontal: DefaultStyles.SPACING,
  },
  appbarMimic: {
    height: 152,
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  footer: {
    paddingBottom: 24,
  },
});

export default LatestWallpapers;
