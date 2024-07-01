import {StyleSheet, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {TAccountInfoObject} from '..';
import UserAvatar from './UserAvatar';
import UserInfo from './UserInfo';

type Props = {
  getObject: () => TAccountInfoObject;
};

function DialogUserProfile({getObject}: Props) {
  const {user} = getObject();
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
    marginVertical: 10,
    padding: 16,
    flexDirection: 'row',
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  avatarContainer: {
    alignItems: 'center',
  },
  userInfo: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 15,
  },
});

export default DialogUserProfile;
