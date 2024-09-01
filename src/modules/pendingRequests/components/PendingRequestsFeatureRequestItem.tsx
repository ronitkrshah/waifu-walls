/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {List} from 'react-native-paper';
import PendingRequestDTO from '../dto/PendingRequestDTO';
import FastImage from 'react-native-fast-image';
import {StyleSheet} from 'react-native';
import {DefaultStyles} from '@app/utils/constants/style';

type Props = {
  request: PendingRequestDTO;
};

function PendingRequestsFeatureRequestItem({request}: Props) {
  return (
    <List.Item
      style={styles.list}
      onPress={() => {}}
      title={request.image_title}
      description={`Requested By ${request.requested_user_name}`}
      left={() => LeftImage(request.preview_url)}
    />
  );
}

function LeftImage(uri: string) {
  return (
    <FastImage source={{uri}} style={styles.leftImage} resizeMode="cover" />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: DefaultStyles.SPACING,
  },
  leftImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default PendingRequestsFeatureRequestItem;
