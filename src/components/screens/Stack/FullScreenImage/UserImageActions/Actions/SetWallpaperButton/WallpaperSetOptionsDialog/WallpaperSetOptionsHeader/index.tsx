import {View} from 'moti';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function WallpaperSetOptionsHeader() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="wallpaper" size={40} />
      <Text variant="titleLarge">Set Wallpaper On</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 10,
  },
});

export default WallpaperSetOptionsHeader;
