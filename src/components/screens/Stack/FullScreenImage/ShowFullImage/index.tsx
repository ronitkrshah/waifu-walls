import {Dimensions, StyleSheet} from 'react-native';
import Animated, {ZoomInEasyDown} from 'react-native-reanimated';

type Props = {
  url: string;
};

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

function ShowFullImage({url}: Props) {
  return (
    <Animated.Image
      entering={ZoomInEasyDown.duration(300)}
      source={{uri: url}}
      height={HEIGHT - 200}
      width={WIDTH - 40}
      style={styles.image}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 30,
  },
});

export default ShowFullImage;
