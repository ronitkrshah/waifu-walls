import {IDatabaseUser} from '@app/types/wallpaper';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Avatar, Surface, Text} from 'react-native-paper';
import UserId from './UserId';

type Props = {
  user: IDatabaseUser;
};

const {width: SCREEN_WIDTH} = Dimensions.get('screen');

function UserProfileInfo({user}: Props) {
  return (
    <Surface style={styles.surface}>
      <Avatar.Icon icon={'account'} />
      <View style={styles.infoContainer}>
        <Text style={styles.username} variant="titleLarge">
          {user.name}
        </Text>
        <UserId userId={user.userId} />
      </View>
    </Surface>
  );
}

const styles = StyleSheet.create({
  surface: {
    width: SCREEN_WIDTH - 32,
    padding: 20,
    borderRadius: 28,
    marginHorizontal: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  infoContainer: {
    gap: 4,
  },
  username: {
    textAlign: 'center',
  },
});

export default UserProfileInfo;
