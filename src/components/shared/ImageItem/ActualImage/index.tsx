import {TWallpaper} from '@app/types/wallpaper';
import {Image} from 'moti';
import {Skeleton} from 'moti/skeleton';
import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import {useTheme} from 'react-native-paper';

type Props = {
  wallpaper: TWallpaper;
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
      <Image
        borderRadius={20}
        onLoadEnd={() => setLoading(false)}
        source={{uri: wallpaper.previewUrl}}
        height={IMG_HEIGHT}
        width={IMG_WIDTH}
        resizeMode="cover"
      />
    </Skeleton>
  );
}

export default ActualImage;
