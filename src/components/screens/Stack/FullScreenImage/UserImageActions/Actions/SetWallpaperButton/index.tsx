import {TUseRoute} from '@app/types/navigation';
import {useRoute} from '@react-navigation/native';
import {IconButton} from 'react-native-paper';
import {setWallpaper} from './utils/setWallpaper';
import {ToastAndroid} from 'react-native';

function SetWallpaperButton() {
  const params = useRoute<TUseRoute<'FullScreenImage'>>().params;

  function onPress() {
    ToastAndroid.show('Setting Wallpaper!', ToastAndroid.SHORT);
    setWallpaper(params.downloadUrl);
  }

  return (
    <IconButton
      animated
      onPress={onPress}
      icon={'wallpaper'}
      size={40}
      mode="contained-tonal"
    />
  );
}

export default SetWallpaperButton;
