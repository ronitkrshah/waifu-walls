import {IDatabaseUser} from '@app/types/wallpaper';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Avatar, Surface, Text} from 'react-native-paper';

type Props = {
  user: IDatabaseUser;
};

const {width: SCREEN_WIDTH} = Dimensions.get('screen');

function UserProfileInfo({user}: Props) {
  return (
    <Surface style={styles.surface}>
      <Avatar.Icon icon={'account'} />
      <View style={styles.infoContainer}>
        <Text variant="titleLarge">{user.name}</Text>
        <Text>{user.userId}</Text>
      </View>
    </Surface>
  );
}

const styles = StyleSheet.create({
  surface: {
    width: SCREEN_WIDTH - 16,
    padding: 20,
    borderRadius: 28,
    marginHorizontal: 'auto',
    flexDirection: 'row',
    gap: 16,
  },
  infoContainer: {
    justifyContent: 'center',
  },
});

export default UserProfileInfo;
