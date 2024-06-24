import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

function Headline() {
  return (
    <View>
      <Text variant="titleLarge" style={styles.headline}>
        Create New Account
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headline: {
    textAlign: 'center',
  },
});

export default Headline;
