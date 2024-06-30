import {Image, StyleSheet} from 'react-native';

type Props = {
  url: string;
};

function ImageItem({url}: Props) {
  return (
    <Image
      style={styles.image}
      source={{uri: url}}
      height={400}
      width={180}
      resizeMode="cover"
    />
  );
}

const styles = StyleSheet.create({
  image: {
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 'auto',
    marginBottom: 15,
  },
});

export default ImageItem;
