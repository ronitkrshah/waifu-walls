import {TUseRoute} from '@app/types/navigation';
import {useRoute} from '@react-navigation/native';
import {IconButton} from 'react-native-paper';
import * as FileSystem from '@dr.pogodin/react-native-fs';
import {useState} from 'react';

function DownloadButton() {
  const [downloading, setDownloading] = useState(false);
  const [icon, setIcon] = useState<'check' | 'download'>('download');
  const params = useRoute<TUseRoute<'FullScreenImage'>>().params;

  function onPress() {
    const randomFileName = Date.now();
    try {
      setDownloading(true);
      FileSystem.downloadFile({
        toFile: `${FileSystem.DownloadDirectoryPath}/${randomFileName}.jpg`,
        fromUrl: params.downloadUri,
      }).promise.finally(() => {
        setDownloading(false);
        setIcon('check');

        setTimeout(() => {
          setIcon('download');
        }, 2000);
      });
    } catch (e) {}
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
