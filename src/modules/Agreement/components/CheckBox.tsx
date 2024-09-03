/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {useAppTheme} from '@app/core/theme/MaterialYouTheme';
import {AppSizes} from '@core/constants';
import {Pressable, StyleSheet, View} from 'react-native';
import {Checkbox, Text} from 'react-native-paper';

type Props = {
  label: string;
  isChecked: boolean;
  onPress(): void;
};

function CheckBox({label, isChecked, onPress}: Props) {
  const {colors} = useAppTheme();

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.pressable}
        onPress={onPress}
        android_ripple={{color: colors.secondaryContainer}}>
        <Checkbox
          status={isChecked ? 'checked' : 'unchecked'}
          onPress={onPress}
        />
        <View style={styles.textContainer}>
          <Text>{label}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: AppSizes.spacing,
    overflow: 'hidden',
  },
  pressable: {
    paddingHorizontal: AppSizes.spacing * 0.3,
    paddingVertical: AppSizes.spacing * 0.4,
    flexDirection: 'row',
    gap: AppSizes.spacing,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default CheckBox;
