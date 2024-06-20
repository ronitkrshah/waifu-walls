import {StyleSheet, View} from 'react-native';
import {TAccountInfoObject} from '..';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Text} from 'react-native-paper';

type Props = {
  getObject: () => TAccountInfoObject;
};

function DialogHeader({getObject}: Props) {
  const {dismissDialog} = getObject();

  return (
    <View style={styles.container}>
      <MaterialIcons
        style={styles.closeIcon}
        name="close"
        onPress={dismissDialog}
        size={28}
      />
      <Text variant="titleMedium">Waifu Walls</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    position: 'absolute',
    left: 0,
  },
});
export default DialogHeader;
