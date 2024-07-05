import {TUseRoute} from '@app/types/navigation';
import {useRoute} from '@react-navigation/native';
import {IconButton} from 'react-native-paper';
import {useState} from 'react';
import Animated, {ZoomIn} from 'react-native-reanimated';
import {ICON_BTN_ANIMATION_DURATION} from '@app/constants';
import WallpaperSetOptionsDialog from './WallpaperSetOptionsDialog';

const AIconButton = Animated.createAnimatedComponent(IconButton);

function SetWallpaperButton() {
  const [showDialog, setShowDialog] = useState(false);
  const params = useRoute<TUseRoute<'FullScreenImage'>>().params;

  function onPress() {
    setShowDialog(true);
  }

  return (
    <>
      <AIconButton
        animated
        entering={ZoomIn.delay(ICON_BTN_ANIMATION_DURATION).springify()}
        onPress={onPress}
        icon={'wallpaper'}
        size={40}
        mode="contained-tonal"
      />
      <WallpaperSetOptionsDialog
        visible={showDialog}
        setVisble={setShowDialog}
        url={params.wallpaper.downloadUrl}
      />
    </>
  );
}

export default SetWallpaperButton;
