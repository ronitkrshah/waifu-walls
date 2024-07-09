import {StyleSheet, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

type Props = {
  show: boolean;
};

function FlatlistFooterActivityIndicator({show}: Props) {
  return show ? (
    <View style={styles.container}>
      <ActivityIndicator animating />
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
});

export default FlatlistFooterActivityIndicator;
