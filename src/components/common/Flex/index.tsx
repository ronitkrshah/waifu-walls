/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';

export type FlexProps = {
  flex?: number;
  center?: true;
} & PropsWithChildren;

function Flex(props: FlexProps) {
  return (
    <View style={[{flex: props.flex}, props.center && styles.flexCenter]}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  flexCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Flex;
