/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {DefaultStyles} from '@app/utils/constants/style';
import {Fragment, PropsWithChildren} from 'react';
import {Dimensions, StyleSheet, View, ViewStyle} from 'react-native';
import {Button, useTheme} from 'react-native-paper';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {AnimatedScrollView} from 'react-native-reanimated/lib/typescript/component/ScrollView';

type Props = {
  buttonLabelOne: string;
  buttonLabelTwo: string;
} & Required<PropsWithChildren>;

const {width: SCREEN_WIDTH} = Dimensions.get('screen');

function AnimatedScrollViewWithActiveTabIndicator({
  buttonLabelOne,
  buttonLabelTwo,
  children,
}: Props) {
  const scrollX = useSharedValue(0);
  const scrollViewRef = useAnimatedRef<AnimatedScrollView>();

  const firstBtnBarStyle = useAnimatedStyle(() => ({
    width: interpolate(
      scrollX.value,
      [0, SCREEN_WIDTH],
      [80, 10],
      Extrapolation.CLAMP,
    ),
  }));

  const secondBtnBarStyle = useAnimatedStyle(() => ({
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
      <View style={styles.buttonOuterContainer}>
        <TabbarButton
          label={buttonLabelOne}
          onPress={scrollToFirstPage}
          animatedStyle={firstBtnBarStyle}
        />

        <TabbarButton
          label={buttonLabelTwo}
          onPress={scrollToSecondPage}
          animatedStyle={secondBtnBarStyle}
        />
      </View>
      <Animated.ScrollView
        horizontal
        ref={scrollViewRef}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}>
        {children}
      </Animated.ScrollView>
    </Fragment>
  );
}

/** Tab Bar Buttons */
type TabbarButtonProps = {
  label: string;
  onPress(): void;
  animatedStyle: ViewStyle;
};

function TabbarButton({label, onPress, animatedStyle}: TabbarButtonProps) {
  const {colors} = useTheme();
  return (
    <View style={styles.buttonInnerContainer}>
      <Button onPress={onPress}>{label}</Button>
      <Animated.View
        style={[
          {
            backgroundColor: colors.inversePrimary,
          },
          styles.activeBar,
          animatedStyle,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    marginVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: DefaultStyles.SPACING,
  },
  buttonInnerContainer: {
    alignItems: 'center',
    flex: 1,
  },
  activeBar: {
    height: 5,
    borderRadius: 10,
  },
});
export default AnimatedScrollViewWithActiveTabIndicator;
