/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {useAppTheme} from '@app/core/theme/MaterialYouTheme';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

type Props = {
  title: string;
  subtitle: string;
};

function Headline({title, subtitle}: Props) {
  const {colors} = useAppTheme();
  return (
    <View style={styles.headlineContainer}>
      <Text
        variant="headlineLarge"
        style={[{color: colors.primary}, styles.headlineCenter]}>
        {title}
      </Text>
      <Text variant="titleMedium" style={styles.headlineCenter}>
        {subtitle}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headlineContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  headlineTitle: {
    fontWeight: 'bold',
  },
  headlineCenter: {
    textAlign: 'center',
  },
});

export default Headline;
