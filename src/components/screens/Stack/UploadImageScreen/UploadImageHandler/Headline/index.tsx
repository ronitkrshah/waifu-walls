import {StyleSheet, View} from 'react-native';
import {Headline as RNPHeadline} from 'react-native-paper';

function Headline() {
  return (
    <View style={styles.container}>
      <RNPHeadline>Upload Image</RNPHeadline>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default Headline;
