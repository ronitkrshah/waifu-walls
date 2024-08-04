/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {useAppTheme} from '@app/theme/MaterialYouTheme';
import {DefaultStyles} from '@app/utils/constants/style';
import {Pressable, StyleSheet, View} from 'react-native';
import {Checkbox, Text} from 'react-native-paper';

type Props = {
  label: string;
  isChecked: boolean;
  onPress(): void;
};

function MatureContentCheckBox({label, isChecked, onPress}: Props) {
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
    borderRadius: DefaultStyles.SPACING,
    overflow: 'hidden',
  },
  pressable: {
    paddingHorizontal: DefaultStyles.SPACING * 0.3,
    paddingVertical: DefaultStyles.SPACING * 0.4,
    flexDirection: 'row',
    gap: DefaultStyles.SPACING,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default MatureContentCheckBox;
