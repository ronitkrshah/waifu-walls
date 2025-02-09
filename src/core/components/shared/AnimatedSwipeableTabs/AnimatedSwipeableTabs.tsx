/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {AppSizes} from '@core/constants';
import React, {Fragment, PropsWithChildren} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import Tabs from './Tabs';
import {AnimatedScrollView} from 'react-native-reanimated/lib/typescript/component/ScrollView';

type Props = {
  buttonLabelOne: string;
  buttonLabelTwo: string;
} & Required<PropsWithChildren>;

const {width: SCREEN_WIDTH} = Dimensions.get('screen');

function AnimatedSwipeableTabs(props: Props) {
  const {buttonLabelOne, buttonLabelTwo, children} = props;
  const scrollX = useSharedValue(0);
  const scrollViewRef = useAnimatedRef<AnimatedScrollView>();

  const firstBtnBarAnimatedStyle = useAnimatedStyle(() => ({
    width: interpolate(
      scrollX.value,
      [0, SCREEN_WIDTH],
      [80, 10],
      Extrapolation.CLAMP,
    ),
  }));

  const secondBtnBarAnimatedStyle = useAnimatedStyle(() => ({
    width: interpolate(
      scrollX.value,
      [0, SCREEN_WIDTH],
      [10, 80],
      Extrapolation.CLAMP,
    ),
  }));

  /**  Functions for Scroll*/
  function scrollToSecondPage() {
    scrollViewRef.current?.scrollTo({x: SCREEN_WIDTH, y: 0, animated: true});
  }
  function scrollToFirstPage() {
    scrollViewRef.current?.scrollTo({x: 0, y: 0, animated: true});
  }

  /** Handle Scroll Event */
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: e => {
      scrollX.value = e.contentOffset.x;
    },
  });

  return (
    <Fragment>
      <View style={styles.container}>
        <Tabs
          label={buttonLabelOne}
          onPress={scrollToFirstPage}
          animatedStyle={firstBtnBarAnimatedStyle}
        />

        <Tabs
          label={buttonLabelTwo}
          onPress={scrollToSecondPage}
          animatedStyle={secondBtnBarAnimatedStyle}
        />
      </View>
      <Animated.ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}>
        {children}
      </Animated.ScrollView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: AppSizes.spacing,
  },
});
export default AnimatedSwipeableTabs;
