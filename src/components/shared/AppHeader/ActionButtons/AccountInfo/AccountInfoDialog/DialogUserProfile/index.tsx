import {Assets} from '@app/constants';
import {StyleSheet, View} from 'react-native';
import {Avatar, Text, useTheme} from 'react-native-paper';
import {TAccountInfoObject} from '..';

type Props = {
  getObject: () => TAccountInfoObject;
};

function DialogUserProfile({getObject}: Props) {
  const {user} = getObject();
  const {colors} = useTheme();

  // This will disable eslint warning
  const avatarContainerWidth = user ? undefined : '100%';

  return (
    <View style={{...styles.container, backgroundColor: colors.surfaceVariant}}>
      <View style={{width: avatarContainerWidth}}>
        <Avatar.Image style={styles.avatar} source={Assets.Images.NoAccount} />
      </View>
      <View style={styles.textContainer}>
        {user && (
          <>
            <Text ellipsizeMode="tail" variant="titleMedium">
              {user.name}
            </Text>
            <Text ellipsizeMode="tail" variant="labelMedium">
              {user.email}
            </Text>
          </>
        )}
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
  avatar: {
    alignSelf: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 15,
  },
});

export default DialogUserProfile;
