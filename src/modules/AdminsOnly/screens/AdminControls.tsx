/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {ScrollView} from 'react-native';
import {useAdminControls} from '../hooks';
import {Fragment} from 'react';
import {ActivityIndicator} from 'react-native-paper';
import {SwitchButtonTile} from '@core/components/shared';

function AdminControls() {
  const {
    isLoadingSettings,
    setUploadImageFeature,
    isUploadImageFeatureEnabled,
    isUpdatingUploadImageFeatureSetting,
  } = useAdminControls();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {isLoadingSettings || isUpdatingUploadImageFeatureSetting ? (
        <ActivityIndicator animating />
      ) : (
        <Fragment>
          <SwitchButtonTile
            title="Upload Image Feature"
            description="Enable or Disable image uploading for all users"
            leftIcon="hide-image"
            onPress={setUploadImageFeature}
            isSwitchEnabled={isUploadImageFeatureEnabled}
          />
        </Fragment>
      )}
    </ScrollView>
  );
}

export default AdminControls;
