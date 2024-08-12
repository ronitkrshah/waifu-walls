/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import FavouritesWallpaperList from '@app/features/likeWallpaper/components/FavouriteWallpaperList';
import {Fragment} from 'react';
import {Appbar} from 'react-native-paper';

function FavouritesTab() {
  return (
    <Fragment>
      <MyAppbar />
      <FavouritesWallpaperList />
    </Fragment>
  );
}

/** Header */
function MyAppbar() {
  return (
    <Appbar.Header mode="large">
      <Appbar.Content title="Favourites" />
    </Appbar.Header>
  );
}

export default FavouritesTab;
