import {TUseRoute} from '@app/types/navigation';
import {useRoute} from '@react-navigation/native';
import {IconButton} from 'react-native-paper';
import {setWallpaper} from './utils/setWallpaper';
import {useState} from 'react';

function SetWallpaperButton() {
  const [loading, setLoading] = useState(false);
  const params = useRoute<TUseRoute<'FullScreenImage'>>().params;

  async function onPress() {
    setLoading(true);
    await setWallpaper(params.downloadUrl);
    setLoading(false);
  }

  return (
    <IconButton
      animated
      onPress={onPress}
      icon={'wallpaper'}
      size={40}
      mode="contained-tonal"
      loading={loading}
    />
  );
}

export default SetWallpaperButton;
