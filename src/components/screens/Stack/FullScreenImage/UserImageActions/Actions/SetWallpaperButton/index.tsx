import {TUseRoute} from '@app/types/navigation';
import {useRoute} from '@react-navigation/native';
import {IconButton} from 'react-native-paper';
import {setWallpaper} from './utils/setWallpaper';
import {useState} from 'react';
import Animated, {ZoomIn} from 'react-native-reanimated';
import {ICON_BTN_ANIMATION_DURATION} from '@app/constants';

const AIconButton = Animated.createAnimatedComponent(IconButton);

function SetWallpaperButton() {
  const [loading, setLoading] = useState(false);
  const params = useRoute<TUseRoute<'FullScreenImage'>>().params;

  async function onPress() {
    setLoading(true);
    await setWallpaper(params.downloadUrl);
    setLoading(false);
  }

  return (
    <AIconButton
      animated
      entering={ZoomIn.delay(ICON_BTN_ANIMATION_DURATION).springify()}
      onPress={onPress}
      icon={'wallpaper'}
      size={40}
      mode="contained-tonal"
      loading={loading}
    />
  );
}

export default SetWallpaperButton;
