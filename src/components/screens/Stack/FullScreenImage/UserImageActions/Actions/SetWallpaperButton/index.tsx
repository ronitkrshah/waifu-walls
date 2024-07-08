import {TUseRoute} from '@app/types/navigation';
import {useRoute} from '@react-navigation/native';
import {Button} from 'react-native-paper';
import {useState} from 'react';
import WallpaperSetOptionsDialog from './WallpaperSetOptionsDialog';

function SetWallpaperButton() {
  const [showDialog, setShowDialog] = useState(false);
  const params = useRoute<TUseRoute<'FullScreenImage'>>().params;

  function onPress() {
    setShowDialog(true);
  }

  return (
    <>
      <Button mode="contained" onPress={onPress}>
        Apply
      </Button>
      <WallpaperSetOptionsDialog
        visible={showDialog}
        setVisble={setShowDialog}
        url={params.wallpaper.downloadUrl}
      />
    </>
  );
}

export default SetWallpaperButton;
