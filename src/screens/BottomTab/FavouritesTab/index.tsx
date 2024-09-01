/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {WallpaperFeature} from '@app/modules';
import {Fragment} from 'react';
import {Appbar} from 'react-native-paper';

function FavouritesTab() {
  return (
    <Fragment>
      <MyAppbar />
      <WallpaperFeature.Like.FavoriteList />
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
