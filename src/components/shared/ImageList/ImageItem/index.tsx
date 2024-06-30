import {TUseNavigation} from '@app/types/navigation';
import {useNavigation} from '@react-navigation/native';
import {Image, Pressable, StyleSheet} from 'react-native';

type Props = {
  url: string;
  downloadUrl: string;
};

function ImageItem({url, downloadUrl}: Props) {
  const navigation = useNavigation<TUseNavigation>();

  function onPress() {
    navigation.navigate('FullScreenImage', {
      uri: url,
      downloadUri: downloadUrl,
    });
  }

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image
        style={styles.image}
        source={{uri: url}}
        height={400}
        width={180}
        resizeMode="cover"
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 'auto',
  },
  image: {
    borderRadius: 20,
  },
});

export default ImageItem;
