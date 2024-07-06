import {IDatabaseWallpaper} from '@app/types/wallpaper';
import {Skeleton} from 'moti/skeleton';
import React, {useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useTheme} from 'react-native-paper';

type Props = {
  wallpaper: IDatabaseWallpaper;
};
const {height: TOTAL_HEIGHT, width: TOTAL_WIDTH} = Dimensions.get('window');
const IMG_HEIGHT = TOTAL_HEIGHT / 2;
const IMG_WIDTH = TOTAL_WIDTH / 2 - 10;

function ActualImage({wallpaper}: Props) {
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  return (
    <Skeleton
      height={IMG_HEIGHT}
      width={IMG_WIDTH}
      show={loading}
      colors={[theme.colors.surface, theme.colors.elevation.level5]}
      colorMode={theme.dark ? 'dark' : 'light'}
      radius={20}
      transition={{
        type: 'decay',
        duration: 2000,
      }}>
      <FastImage
        onLoadEnd={() => setLoading(false)}
        source={{
          uri: wallpaper.previewUrl,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
        style={styles.image}
      />
    </Skeleton>
  );
}

const styles = StyleSheet.create({
  image: {
    width: IMG_WIDTH,
    height: IMG_HEIGHT,
    borderRadius: 20,
  },
});

export default ActualImage;
