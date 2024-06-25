import {useState} from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';
import {View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {Button} from 'react-native-paper';

type Props = {
  getImagePath: (path: string) => void;
};

const {width} = Dimensions.get('window');

function ImagePreview({getImagePath}: Props) {
  const [imagePath, setImagePath] = useState('');

  async function handleSelectImage() {
    try {
      const resp = await launchImageLibrary({mediaType: 'photo'});
      if (resp.assets === undefined) {
        return;
      }
      const image = resp.assets[0];
      setImagePath(image.uri!);
      getImagePath(image.uri!);
    } catch (e) {
      // ... Ignore
    }
  }

  return (
    <View style={styles.container}>
      {imagePath !== '' && (
        <Image
          resizeMode="contain"
          style={styles.previewImage}
          source={{uri: imagePath}}
          width={width - 32}
          height={640}
        />
      )}
      <Button mode="contained-tonal" onPress={handleSelectImage}>
        Select Image
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 40,
    gap: 20,
  },
  previewImage: {
    borderRadius: 30,
  },
});

export default ImagePreview;
