/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {ActivityIndicator} from 'react-native-paper';
import useLatestWallpaperFeatureController from '../controllers/useLatestWallpaperFeatureController';
import {FlatList, StyleSheet} from 'react-native';
import LatestWallpaerFeatureListItem from './LatestWallpaerFeatureListItem';
import {DefaultStyles} from '@app/utils/constants/style';
import {Fragment} from 'react';
import SizedBox from '@app/components/common/SizedBox';

function LatestWallpaperFeature() {
  const {isLoading, wallpaperList} = useLatestWallpaperFeatureController();

  return (
    <Fragment>
      <SizedBox vertical={DefaultStyles.SPACING} />
      <FlatList
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        ListFooterComponent={<ActivityIndicator animating={isLoading} />}
        data={wallpaperList}
        renderItem={({item}) => (
          <LatestWallpaerFeatureListItem wallpaper={item} />
        )}
        keyExtractor={({id}) => id}
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
});

export default LatestWallpaperFeature;
