import {TUseRoute} from '@app/types/navigation';
import {useRoute} from '@react-navigation/native';
import {IconButton} from 'react-native-paper';
import {useState} from 'react';
import {downloadWallpaper} from '@app/utils/downloadWallpaper';

function DownloadButton() {
  const [downloading, setDownloading] = useState(false);
  const [icon, setIcon] = useState<'check' | 'download'>('download');
  const params = useRoute<TUseRoute<'FullScreenImage'>>().params;

  async function onPress() {
    setDownloading(true);
    await downloadWallpaper(params.downloadUri);
    setDownloading(false);
    setIcon('check');
    setTimeout(() => {
      setIcon('download');
    }, 2000);
  }

  return (
    <IconButton
      animated
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
