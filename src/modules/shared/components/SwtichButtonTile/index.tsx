/**
 * Copyright (c) Ronit Kr Shah
 *
 * The source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {useAppTheme} from '@app/theme/MaterialYouTheme';
import {DefaultStyles} from '@app/utils/constants/style';
import {StyleSheet} from 'react-native';
import {List, Switch} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type Props = {
  title: string;
  description?: string;
  leftIcon?: string;
  isSwitchEnabled: boolean;
  onPress(value: boolean): void;
};

function SwitchButtonTile(props: Props) {
  const {colors} = useAppTheme();

  return (
    <List.Item
      title={props.title}
      description={props.description}
      titleStyle={{color: colors.primary, ...styles.title}}
      style={styles.tileStyle}
      rippleColor={colors.elevation.level5}
      onPress={() => props.onPress(!props.isSwitchEnabled)}
      left={() =>
        props.leftIcon ? LeftIcon(props.leftIcon, colors.primary) : undefined
      }
      right={() => RightSwitchButton(props.isSwitchEnabled, props.onPress)}
    />
  );
}

/** Left Icons */
function LeftIcon(icon: string, color?: string) {
  return (
    <MaterialIcons
      name={icon}
      size={30}
      style={styles.leftIcon}
      color={color}
    />
  );
}

/** Switch Button */
function RightSwitchButton(value: boolean, onPress: (value: boolean) => void) {
  return <Switch value={value} onValueChange={onPress} />;
}

/** Styles */
const styles = StyleSheet.create({
  tileStyle: {
    paddingHorizontal: DefaultStyles.SPACING,
  },
  title: {
    fontWeight: 'bold',
  },
  leftIcon: {
    alignSelf: 'center',
  },
});

export default SwitchButtonTile;
