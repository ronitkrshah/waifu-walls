import {TUseRoute} from '@app/types/navigation';
import {useRoute} from '@react-navigation/native';
import {Button} from 'react-native-paper';
import {useState} from 'react';
import {downloadWallpaper} from '@app/utils/downloadWallpaper';

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
    <Button
      mode="contained"
      loading={downloading}
      disabled={downloading || icon === 'check'}
      onPress={onPress}>
      Download
    </Button>
  );
}

export default DownloadButton;
