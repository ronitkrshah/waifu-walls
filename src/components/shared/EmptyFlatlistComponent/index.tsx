import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  loading?: boolean;
  text?: string;
};

function EmptyFlatlistComponent({text, loading}: Props) {
  return !loading ? (
    <View style={styles.container}>
      <MaterialCommunityIcons name="emoticon-sad-outline" size={60} />
      {text && <Text variant="titleLarge">{text}</Text>}
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: 'center',
    gap: 10,
  },
});

export default EmptyFlatlistComponent;
