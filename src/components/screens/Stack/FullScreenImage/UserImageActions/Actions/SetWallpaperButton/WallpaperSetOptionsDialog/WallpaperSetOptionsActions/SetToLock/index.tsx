import {Button} from 'react-native-paper';
import {setWallpaper} from '../../../utils/setWallpaper';
import {useState} from 'react';

type Props = {
  url: string;
};

function SetToLock({url}: Props) {
  const [loading, setLoading] = useState(false);

  async function handlePress() {
    setLoading(true);
    await setWallpaper(url, 'lock');
    setLoading(false);
  }

  return (
    <Button
      onPress={handlePress}
      mode="contained"
      loading={loading}
      disabled={loading}>
      Lock
    </Button>
  );
}

export default SetToLock;
