import {IDatabaseWallpaper} from '@app/types/wallpaper';
import {Dimensions, StyleSheet} from 'react-native';
import {Surface, Text, useTheme} from 'react-native-paper';
import Animated, {FadeIn} from 'react-native-reanimated';

type Props = {
  wallpaper: IDatabaseWallpaper;
};

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const ASurface = Animated.createAnimatedComponent(Surface);

function FullScreenImageDetails({wallpaper}: Props) {
  const {colors} = useTheme();

  return (
    <ASurface
      elevation={2}
      style={styles.container}
      entering={FadeIn.delay(400)}>
      <Text
        variant="titleLarge"
        style={{...styles.title, color: colors.primary}}>
        {wallpaper.title}
      </Text>
      <Text variant="bodyMedium" style={styles.uploadedBy}>
        Uploaded By: {wallpaper.uploadedBy.name}
      </Text>
    </ASurface>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    width: SCREEN_WIDTH - 32,
    borderRadius: 28,
    padding: 16,
    gap: 10,
  },
  title: {
    textAlign: 'center',
  },
  uploadedBy: {
    fontStyle: 'italic',
  },
});

export default FullScreenImageDetails;
