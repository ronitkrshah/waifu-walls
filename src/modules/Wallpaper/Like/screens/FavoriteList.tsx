/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {DefaultStyles} from '@app/utils/constants/style';
import {FlatList, StyleSheet} from 'react-native';
import {WallpaperListItem} from '@app/modules/Wallpaper/shared/components';
import {useList} from "../hooks"

function FavoriteList() {
  const {handleWallpaperPress, wallpaperList} = useList();

  return (
    <FlatList
      numColumns={2}
      columnWrapperStyle={styles.columnWrapper}
      data={wallpaperList}
      renderItem={({item}) => (
        <WallpaperListItem wallpaper={item} onPress={handleWallpaperPress} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: 'center',
    gap: 10,
    marginBottom: DefaultStyles.SPACING - 4,
  },
});

export default FavoriteList;
