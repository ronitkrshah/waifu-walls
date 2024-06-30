import {Dimensions, Image, StyleSheet} from 'react-native';

type Props = {
  url: string;
};

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

function ShowFullImage({url}: Props) {
  return (
    <Image
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
