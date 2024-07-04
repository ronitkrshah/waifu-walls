import {IDatabaseUser} from '@app/types/wallpaper';
import {StyleSheet, View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  user: IDatabaseUser;
};

function UploadedUser({user}: Props) {
  const {colors} = useTheme();
  return (
    <View style={{backgroundColor: colors.primary, ...styles.container}}>
      <MaterialCommunityIcons
        name="account-circle"
        size={16}
        color={colors.onPrimary}
      />
      <Text variant="titleSmall" style={{color: colors.onPrimary}}>
        {user.name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 20,
    left: 20,
    borderRadius: 20,
    paddingRight: 10,
    paddingLeft: 4,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
});

export default UploadedUser;
