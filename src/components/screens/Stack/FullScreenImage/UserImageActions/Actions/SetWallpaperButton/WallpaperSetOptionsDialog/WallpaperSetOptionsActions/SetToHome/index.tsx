import {Button} from 'react-native-paper';
import {setWallpaper} from '../../../utils/setWallpaper';
import {useState} from 'react';

type Props = {
  url: string;
};

function SetToHome({url}: Props) {
  const [loading, setLoading] = useState(false);

  async function handlePress() {
    setLoading(true);
    await setWallpaper(url, 'system');
    setLoading(false);
  }

  return (
    <Button
      onPress={handlePress}
      mode="contained"
      loading={loading}
      disabled={loading}>
      Home
    </Button>
  );
}

export default SetToHome;
