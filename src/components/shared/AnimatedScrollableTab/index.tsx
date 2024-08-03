/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {DefaultStyles} from '@app/utils/constants/style';
import React, {Fragment} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {AnimatedScrollView} from 'react-native-reanimated/lib/typescript/component/ScrollView';
import AnimatedTabbarButton from './AnimatedTabBar';

type Props = {
  buttonLabelOne: string;
  buttonLabelTwo: string;
  children: [React.JSX.Element, React.JSX.Element];
};

const {width: SCREEN_WIDTH} = Dimensions.get('screen');

/**
 * Render A Scrollable Tab List with Flatlist
 *
 * `children` Only Two JSX Element
 */
function AnimatedScrollableTab({
  buttonLabelOne,
  buttonLabelTwo,
  children,
}: Props) {
  const scrollX = useSharedValue(0);
  const flatListRef = useAnimatedRef<AnimatedScrollView>();

  /** Data Will Be Render On Flatlist */
  const RenderData = [
    {id: 'firstComponent', Component: children[0]},
    {id: 'secondComoponent', Component: children[1]},
  ];

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
    flatListRef.current?.scrollTo({x: SCREEN_WIDTH, y: 0, animated: true});
  }
  function scrollToFirstPage() {
    flatListRef.current?.scrollTo({x: 0, y: 0, animated: true});
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
        <AnimatedTabbarButton
          label={buttonLabelOne}
          onPress={scrollToFirstPage}
          animatedStyle={firstBtnBarAnimatedStyle}
        />

        <AnimatedTabbarButton
          label={buttonLabelTwo}
          onPress={scrollToSecondPage}
          animatedStyle={secondBtnBarAnimatedStyle}
        />
      </View>
      <Animated.FlatList
        horizontal
        pagingEnabled
        data={RenderData}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => item.Component}
        keyExtractor={item => item.id}
        onScroll={scrollHandler}
      />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: DefaultStyles.SPACING,
  },
});
export default AnimatedScrollableTab;
