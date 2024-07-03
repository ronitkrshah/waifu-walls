import {GlobalStoreRootState} from '@app/store/store';
import {Dimensions, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import {useSelector} from 'react-redux';

type Props = {
  url: string;
  imageId: string;
};

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

function ShowFullImage({url, imageId}: Props) {
  const isTransitionEnabled = useSelector(
    (state: GlobalStoreRootState) =>
      state.settings.unstableSettings.wallpaperTransition,
  );

  return (
    <Animated.Image
      source={{uri: url}}
      height={HEIGHT - 200}
      width={WIDTH - 40}
      style={styles.image}
      sharedTransitionTag={isTransitionEnabled ? imageId : undefined}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 30,
  },
});

export default ShowFullImage;
