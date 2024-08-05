/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {ActivityIndicator} from 'react-native-paper';
import usePendingRequestsFeatureController from '../controllers/usePendingRequestsFeatureController';
import {FlatList, StyleSheet} from 'react-native';
import PendingRequestsFeatureRequestItem from './PendingRequestsFeatureRequestItem';
import {DefaultStyles} from '@app/utils/constants/style';

function PendingRequestsFeature() {
  const {requests, isLoading} = usePendingRequestsFeatureController();

  return (
    <FlatList
      data={requests}
      contentContainerStyle={styles.contentContainer}
      renderItem={({item}) => (
        <PendingRequestsFeatureRequestItem request={item} />
      )}
      ListFooterComponent={<ActivityIndicator animating={isLoading} />}
    />
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    gap: DefaultStyles.SPACING,
  },
});

export default PendingRequestsFeature;
