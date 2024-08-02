/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import FlavoursTabList from '@app/components/screens/BottomTab/FlavoursTab/FlavoursTabList';
import AnimatedScrollViewWithActiveTabIndicator from '@app/components/shared/AnimatedScrollViewWithActiveTabIndicator';
import {NSFWList} from '@app/utils/constants/NSFWList';
import {SFWList} from '@app/utils/constants/SFWList';
import {DefaultStyles} from '@app/utils/constants/style';
import {Fragment} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Divider, Text, useTheme} from 'react-native-paper';

const {width: SCREEN_WIDTH} = Dimensions.get('screen');
function FlavoursTab() {
  return (
    <Fragment>
      <Headline />
      <Divider style={styles.divider} />
      <AnimatedScrollViewWithActiveTabIndicator
        buttonLabelOne="SFW"
        buttonLabelTwo="NSFW">
        <FlavoursTabList list={SFWList} />
        <FlavoursTabList list={NSFWList} />
      </AnimatedScrollViewWithActiveTabIndicator>
    </Fragment>
  );
}

/**
 * This component isn't that big that's why creating in same file
 */
function Headline() {
  const {colors} = useTheme();

  return (
    <View style={styles.headlineContainer}>
      <Text variant="headlineSmall">Choose Your</Text>
      <Text variant="headlineLarge" style={{color: colors.primary}}>
        Flavour
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  divider: {
    width: SCREEN_WIDTH - DefaultStyles.SPACING * 2,
    marginHorizontal: 'auto',
  },
  headlineContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: DefaultStyles.SPACING,
  },
});

export default FlavoursTab;
