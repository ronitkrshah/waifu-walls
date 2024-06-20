import {Assets} from '@app/constants';
import {StyleSheet, View} from 'react-native';
import {Avatar, Text, useTheme} from 'react-native-paper';

function DialogUserProfile() {
  const {colors} = useTheme();

  return (
    <View style={{...styles.container, backgroundColor: colors.surfaceVariant}}>
      <Avatar.Image source={Assets.Images.NoAccount} />
      <View style={styles.textContainer}>
        <Text variant="titleMedium">Waifu</Text>
        <Text variant="labelMedium">waifu@jp.com</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 16,
    flexDirection: 'row',
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 15,
  },
});

export default DialogUserProfile;
