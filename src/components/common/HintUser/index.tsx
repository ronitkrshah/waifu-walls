import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  hint: string;
};
function HintUser({hint}: Props) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="information-outline" size={24} />
      <Text>{hint}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
});

export default HintUser;
