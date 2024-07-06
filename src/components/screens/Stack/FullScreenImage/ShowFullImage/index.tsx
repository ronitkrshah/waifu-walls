import {Dimensions, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, {ZoomInEasyDown} from 'react-native-reanimated';

type Props = {
  url: string;
};

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

const AImage = Animated.createAnimatedComponent(FastImage);
function ShowFullImage({url}: Props) {
  return (
    <AImage
      entering={ZoomInEasyDown}
      source={{
        uri: url,
        priority: FastImage.priority.normal,
      }}
      resizeMode={FastImage.resizeMode.cover}
      style={styles.image}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 30,
    width: WIDTH - 40,
    height: HEIGHT - 200,
  },
});

export default ShowFullImage;
