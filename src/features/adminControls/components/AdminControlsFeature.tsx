/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {ScrollView} from 'react-native';
import useAdminControlController from '../controllers/useAdminControlsController';
import {Fragment} from 'react';
import {ActivityIndicator} from 'react-native-paper';
import SwitchButtonTile from '@app/features/shared/components/SwtichButtonTile';

function AdminControlsFeature() {
  const {
    isLoadingSettings,
    setUploadImageFeature,
    isUploadImageFeatureEnabled,
    isUpdatingUploadImageFeatureSetting,
  } = useAdminControlController();
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

export default AdminControlsFeature;
