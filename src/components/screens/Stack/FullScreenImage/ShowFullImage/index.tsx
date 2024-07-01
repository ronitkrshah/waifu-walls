import {Dimensions, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';

type Props = {
  url: string;
  imageId: string;
};

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

function ShowFullImage({url, imageId}: Props) {
  return (
    <Animated.Image
      source={{uri: url}}
      height={HEIGHT - 200}
      width={WIDTH - 40}
      style={styles.image}
      sharedTransitionTag={imageId}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 30,
  },
});

export default ShowFullImage;
