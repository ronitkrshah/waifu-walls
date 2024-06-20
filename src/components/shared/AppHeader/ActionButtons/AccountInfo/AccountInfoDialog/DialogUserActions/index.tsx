import {StyleSheet, View} from 'react-native';
import {Button, useTheme} from 'react-native-paper';

function DialogUserActions() {
  const {colors} = useTheme();

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: colors.surfaceVariant,
      }}>
      <Button mode="contained">Log In</Button>
      <Button mode="contained">Log Out</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    padding: 16,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderBottomEndRadius: 24,
    borderBottomStartRadius: 24,
  },
});

export default DialogUserActions;
