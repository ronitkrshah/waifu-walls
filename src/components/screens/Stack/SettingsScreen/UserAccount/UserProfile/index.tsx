import {StyleSheet, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import UserAvatar from './UserAvatar';
import UserInfo from './UserInfo';
import {User} from '@app/store/reducers/userReducer';

type Props = {
  user: User | null;
};

function UserProfile({user}: Props) {
  const {colors} = useTheme();

  // This will disable eslint warning
  const avatarContainerWidth = user ? undefined : '100%';

  return (
    <View style={{backgroundColor: colors.surfaceVariant, ...styles.container}}>
      <View style={{width: avatarContainerWidth, ...styles.avatarContainer}}>
        <UserAvatar name={user?.name} />
      </View>
      <View style={styles.userInfo}>
        <UserInfo user={user} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 5,
    paddingVertical: 30,
    paddingHorizontal: 40,
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
    flexDirection: 'row',
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  userInfo: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
  },
});

export default UserProfile;
