import {IDatabaseUser} from '@app/types/wallpaper';
import UserProfileInfo from './UserProfileInfo';
import {StyleSheet, View} from 'react-native';

type Props = {
  user: IDatabaseUser;
};

function UserInformationUserProfile({user}: Props) {
  return (
    <View style={styles.container}>
      <UserProfileInfo user={user} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
});

export default UserInformationUserProfile;
