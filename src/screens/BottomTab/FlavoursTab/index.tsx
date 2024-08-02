/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import FlavoursTabList from '@app/components/screens/BottomTab/FlavoursTab/FlavoursTabList';
import {NSFWList} from '@app/utils/constants/NSFWList';
import {SFWList} from '@app/utils/constants/SFWList';
import {DefaultStyles} from '@app/utils/constants/style';
import {Fragment, useRef} from 'react';
import {Animated, Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import {Divider, Text, Button, useTheme} from 'react-native-paper';

const {width: SCREEN_WIDTH} = Dimensions.get('screen');

function FlavoursTab() {
  const scrollRef = useRef<ScrollView>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const {colors} = useTheme();

  /** Active Bar Width for SFW */
  const SFWBarWidth = scrollX.interpolate({
    inputRange: [0, SCREEN_WIDTH],
    outputRange: ['100%', '10%'],
    extrapolate: 'clamp',
  });
  /** Active Bar Width for SignUp */
  const NSFWBarWidth = scrollX.interpolate({
    inputRange: [0, SCREEN_WIDTH],
    outputRange: ['10%', '100%'],
    extrapolate: 'clamp',
  });

  return (
    <Fragment>
      <Headline />
      <View>
        <Divider style={styles.divider} />
        <View style={styles.buttonOuterContainer}>
          <View style={styles.buttonInnerContainer}>
            <Button>SFW</Button>
            <Animated.View
              style={[
                {backgroundColor: colors.inversePrimary, width: SFWBarWidth},
                styles.activeBar,
              ]}
            />
          </View>
          <View style={styles.buttonInnerContainer}>
            <Button>NSFW</Button>
            <Animated.View
              style={[
                {backgroundColor: colors.inversePrimary, width: NSFWBarWidth},
                styles.activeBar,
              ]}
            />
          </View>
        </View>
        <Animated.ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ],
            {
              useNativeDriver: false,
            },
          )}>
          <FlavoursTabList list={SFWList} />
          <FlavoursTabList list={NSFWList} />
        </Animated.ScrollView>
      </View>
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
    height: 1,
    width: SCREEN_WIDTH - DefaultStyles.SPACING * 2,
    marginHorizontal: 'auto',
  },
  buttonOuterContainer: {
    marginVertical: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: DefaultStyles.SPACING,
  },
  buttonInnerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeBar: {
    height: 5,
    borderRadius: 10,
  },

  headlineContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: DefaultStyles.SPACING,
  },
});

export default FlavoursTab;
