import {TUseRoute} from '@app/types/navigation';
import {useRoute} from '@react-navigation/native';
import {IconButton} from 'react-native-paper';
import {useState} from 'react';
import {downloadWallpaper} from '@app/utils/downloadWallpaper';
import Animated, {ZoomIn} from 'react-native-reanimated';
import {ICON_BTN_ANIMATION_DURATION} from '@app/constants';

const AIconButton = Animated.createAnimatedComponent(IconButton);

function DownloadButton() {
  const [downloading, setDownloading] = useState(false);
  const [icon, setIcon] = useState<'check' | 'download'>('download');
  const params = useRoute<TUseRoute<'FullScreenImage'>>().params;

  async function onPress() {
    setDownloading(true);
    await downloadWallpaper(params.wallpaper.downloadUrl);
    setDownloading(false);
    setIcon('check');
    setTimeout(() => {
      setIcon('download');
    }, 2000);
  }

  return (
    <AIconButton
      animated
      entering={ZoomIn.duration(ICON_BTN_ANIMATION_DURATION).springify()}
      onPress={onPress}
      icon={icon}
      size={40}
      mode="contained-tonal"
      loading={downloading}
      disabled={downloading || icon === 'check'}
    />
  );
}

export default DownloadButton;
