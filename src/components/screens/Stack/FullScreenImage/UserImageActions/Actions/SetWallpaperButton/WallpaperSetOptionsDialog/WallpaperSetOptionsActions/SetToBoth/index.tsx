import {Button} from 'react-native-paper';
import {setWallpaper} from '../../../utils/setWallpaper';
import {useState} from 'react';

type Props = {
  url: string;
};

function SetToBoth({url}: Props) {
  const [loading, setLoading] = useState(false);

  async function handlePress() {
    setLoading(true);
    await setWallpaper(url, 'both');
    setLoading(false);
  }

  return (
    <Button
      onPress={handlePress}
      mode="contained"
      loading={loading}
      disabled={loading}>
      Both
    </Button>
  );
}

export default SetToBoth;
