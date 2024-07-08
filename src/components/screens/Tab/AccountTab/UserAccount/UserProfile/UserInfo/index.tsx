import {User} from '@app/store/reducers/userReducer';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

type Props = {
  user: User | null;
};

function UserInfo({user}: Props) {
  if (!user) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text ellipsizeMode="tail" variant="titleMedium">
        {user.name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default UserInfo;
