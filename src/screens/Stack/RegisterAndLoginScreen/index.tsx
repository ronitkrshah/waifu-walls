/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Animated, Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import {useRef} from 'react';
import {Button, useTheme} from 'react-native-paper';
import {DefaultStyles} from '@app/utils/constants/style';
import RegisterPage from '@app/components/screens/Stack/RegisterAndLoginScreen/RegisterPage';
import LoginPage from '@app/components/screens/Stack/RegisterAndLoginScreen/LoginPage';

const {width: SCREEN_WIDTH} = Dimensions.get('screen');

function RegisterAndLoginScreen() {
  const scrollRef = useRef<ScrollView>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const {colors} = useTheme();

  /** Active Bar Width for SignIn */
  const signInBarWidth = scrollX.interpolate({
    inputRange: [0, SCREEN_WIDTH],
    outputRange: ['100%', '0%'],
    extrapolate: 'clamp',
  });
  /** Active Bar Width for SignUp */
  const signUpBarWidth = scrollX.interpolate({
    inputRange: [0, SCREEN_WIDTH],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  function moveToRegisterPage() {
    scrollRef.current?.scrollTo({x: SCREEN_WIDTH, y: 0, animated: true});
  }

  function moveToLoginPage() {
    scrollRef.current?.scrollTo({x: 0, y: 0, animated: true});
  }

  return (
    <>
      <View style={styles.buttonOuterContainer}>
        <View style={styles.buttonInnerContainer}>
          <Button onPress={moveToLoginPage}>Sign In</Button>
          <Animated.View
            style={[
              {backgroundColor: colors.inversePrimary, width: signInBarWidth},
              styles.activeBar,
            ]}
          />
        </View>
        <View style={styles.buttonInnerContainer}>
          <Button onPress={moveToRegisterPage}>Sign Up</Button>
          <Animated.View
            style={[
              {backgroundColor: colors.inversePrimary, width: signUpBarWidth},
              styles.activeBar,
            ]}
          />
        </View>
      </View>
      <Animated.ScrollView
        ref={scrollRef}
        horizontal
        bounces={false}
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
        <LoginPage />
        <RegisterPage />
      </Animated.ScrollView>
    </>
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

export default RegisterAndLoginScreen;
