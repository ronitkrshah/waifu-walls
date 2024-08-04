/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {FlatList} from 'react-native';
import useAppSettingsController from '../controllers/useAppSettingsController';
import AppSettingsFeatureListCheckbox from './AppSettingsFeatureListCheckbox';

function AppSettingsFeature() {
  const {AppSettingsList} = useAppSettingsController();
  return (
    <FlatList
      data={AppSettingsList}
      renderItem={({item}) => <AppSettingsFeatureListCheckbox feature={item} />}
      keyExtractor={item => item.id}
    />
  );
}

export default AppSettingsFeature;
