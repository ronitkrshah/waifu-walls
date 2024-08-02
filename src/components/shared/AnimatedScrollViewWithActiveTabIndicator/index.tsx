/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {DefaultStyles} from '@app/utils/constants/style';
import {Fragment, PropsWithChildren, useRef} from 'react';
import {Animated, Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import {Button, useTheme} from 'react-native-paper';

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
  const scrollRef = useRef<ScrollView>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const {colors} = useTheme();

  /** Active Bar Width for Buton One */
  const buttonOneActiveBarWidth = scrollX.interpolate({
    inputRange: [0, SCREEN_WIDTH],
    outputRange: ['100%', '10%'],
    extrapolate: 'clamp',
  });
  /** Active Bar Width for Button Two */
  const buttonTwoActiveBarWidth = scrollX.interpolate({
    inputRange: [0, SCREEN_WIDTH],
    outputRange: ['10%', '100%'],
    extrapolate: 'clamp',
  });

  /**  Functions for Scroll*/
  function scrollToSecondPage() {
    scrollRef.current?.scrollTo({x: SCREEN_WIDTH, y: 0, animated: true});
  }
  function scrollToFirstPage() {
    scrollRef.current?.scrollTo({x: 0, y: 0, animated: true});
  }

  return (
    <Fragment>
      <View style={styles.buttonOuterContainer}>
        <View style={styles.buttonInnerContainer}>
          <Button onPress={scrollToFirstPage}>{buttonLabelOne}</Button>
          <Animated.View
            style={[
              {
                backgroundColor: colors.inversePrimary,
                width: buttonOneActiveBarWidth,
              },
              styles.activeBar,
            ]}
          />
        </View>
        <View style={styles.buttonInnerContainer}>
          <Button onPress={scrollToSecondPage}>{buttonLabelTwo}</Button>
          <Animated.View
            style={[
              {
                backgroundColor: colors.inversePrimary,
                width: buttonTwoActiveBarWidth,
              },
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
        {children}
      </Animated.ScrollView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
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
});
export default AnimatedScrollViewWithActiveTabIndicator;
