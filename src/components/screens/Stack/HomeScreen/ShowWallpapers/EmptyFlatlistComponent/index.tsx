import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function EmptyFlatlistComponent() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="emoticon-sad-outline" size={60} />
      <Text variant="titleLarge">No Items!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: 'center',
    gap: 10,
  },
});

export default EmptyFlatlistComponent;
